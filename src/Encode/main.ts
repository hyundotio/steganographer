import { config } from "../../config";
import { Options } from "../../@types/Options";
import { loadImg } from "../utils/DOMUtils";
import { findNextPrime } from "../utils/MathUtils";
import { getHidingCapacity } from "../utils/HidingCapacity";

function messageDelimiter (threshold: number): number[] {
    const delimiter = new Array(threshold * 3);
    for (let i = 0; i < delimiter.length; i += 1) {
        delimiter[i] = 255;
    }
    return delimiter
}

/**
 * Embeds text to image.
 *
 * @param   {string} message Required: The message to be embedded in string.
 * @param   {HTMLImageElement} image Required: The image element that encoder requires as data source.
 * @param   {options} options Optional: Internal options. t: number, threshold: number, codeUnitSize: number
 * @returns {string} Returns internal URL of image
 */
export async function encode(message: string, image: (HTMLImageElement | string), options?: Options) {
    // Handle image url
    if (typeof image === 'string') {
        image = loadImg(image);
    } else if (image instanceof HTMLImageElement && image.src) {
        image = loadImg(image.src);
    } else {
        if (typeof message !== 'string' ? true : message.length) {
            throw new Error('Invalid message input: Message is either empty or not a string.');
        }
        throw new Error('Invalid image input: The input image is neither an URL string nor an image.');
    }

    const hidingCapacity = getHidingCapacity(image, config, options);
    
    if (hidingCapacity > message.length) {
        const t = options ? options.t : config.t;
        const threshold = options ? options.threshold : config.threshold;
        const codeUnitSize = options ? options.codeUnitSize : config.codeUnitSize;
        const prime = findNextPrime(Math.pow(2, t));

        if(!t || t < 1 || t > 7) {
            throw new Error('Invalid t value: Parameter t = " + t + " is not valid: 0 < t < 8');
        } 

        const shadowCanvas = document.createElement('canvas');
        const shadowCtx = shadowCanvas.getContext('2d');

        shadowCanvas.style.display = 'none';
        shadowCanvas.width = image.width;
        shadowCanvas.height = image.height;

        if (shadowCtx) {
            shadowCtx.drawImage(image, 0, 0);
        
            const imageData = shadowCtx.getImageData(0, 0, shadowCanvas.width, shadowCanvas.height);
            const data = imageData.data;
            
            // bundlesPerChar ... Count of full t-bit-sized bundles per Character
            // overlapping ... Count of bits of the currently handled character which are not handled during each run
            // dec ... UTF-16 Unicode of the i-th character of the message
            // curOverlapping ... The count of the bits of the previous character not handled in the previous run
            // mask ... The raw initial bitmask, will be changed every run and if bits are overlapping
            const bundlesPerChar = codeUnitSize / t >> 0;
            const overlapping = codeUnitSize % t;
            const modMessage: number[] = [];
            
            let oldDec = 0;
            let decM: number, oldMask: number, left: number, right: number, dec: number, curOverlapping: number, mask: number;
            let i: number, j: number;

            for (i = 0; i <= message.length; i += 1) {
                dec = message.charCodeAt(i) || 0;
                curOverlapping = (overlapping * i) % t;
                if(curOverlapping > 0 && oldDec) {
                // Mask for the new character, shifted with the count of overlapping bits
                mask = Math.pow(2,t - curOverlapping) - 1;
                // Mask for the old character, i.e. the t-curOverlapping bits on the right
                // of that character
                oldMask = Math.pow(2, codeUnitSize) * (1 - Math.pow(2, -curOverlapping));
                left = (dec & mask) << curOverlapping;
                right = (oldDec & oldMask) >> (codeUnitSize - curOverlapping);
                modMessage.push(left + right);
            
                if(i<message.length) {
                    mask = Math.pow(2, 2 * t - curOverlapping) * (1 - Math.pow(2, -t));
                    for (j = 1; j < bundlesPerChar; j += 1) {
                        decM = dec & mask;
                        modMessage.push(decM >> (((j - 1) * t) + (t - curOverlapping)));
                        mask <<= t;
                    }
                    if ((overlapping * (i + 1)) % t === 0) {
                        mask = Math.pow(2, codeUnitSize) * (1 - Math.pow(2, -t));
                        decM = dec & mask;
                        modMessage.push(decM >> (codeUnitSize-t));
                    }
                    else if(((((overlapping * (i + 1)) % t) + (t - curOverlapping)) <= t)) {
                        decM = dec & mask;
                        modMessage.push(decM >> (((bundlesPerChar - 1) * t) + (t - curOverlapping)));
                    }
                }
                }
                else if (i < message.length) {
                    mask = Math.pow(2, t) - 1;
                    for (j = 0; j < bundlesPerChar; j += 1) {
                        decM = dec & mask;
                        modMessage.push(decM >> (j * t));
                        mask <<= t;
                    }
                }
                oldDec = dec;
            }
            
            // Write Data
            const delimiter = messageDelimiter(threshold);
            let offset, index, subOffset, q, qS;

            for (offset = 0; (offset + threshold) * 4 <= data.length && (offset + threshold) <= modMessage.length; offset += threshold) {
                qS=[];
                
                for (i = 0; i < threshold && i + offset < modMessage.length; i += 1) {
                    q = 0;
                    for (j = offset; j < threshold + offset && j < modMessage.length; j += 1) {
                        q += modMessage[j] * Math.pow(i + 1, j-offset);
                    }
                    qS[i] = (255 - prime + 1) + (q % prime);
                }

                for (i = offset * 4; i < (offset + qS.length) * 4 && i < data.length; i += 4) {
                    data[i + 3] = qS[(i / 4) % threshold];
                }
            
                subOffset = qS.length;
            }

            if (subOffset !== undefined) {
                // Write message-delimiter
                for (index = (offset + subOffset); index - (offset + subOffset) < delimiter.length && (offset + delimiter.length) * 4 < data.length; index += 1) {
                    data[(index * 4) + 3] = delimiter[index - (offset + subOffset)];
                }

                // Clear remaining data
                for (i = ((index + 1) * 4) + 3; i < data.length; i += 4) {
                    data[i] = 255;
                }
                const newimageDataSettings = { settings: imageData.colorSpace };
                const newImageData = new ImageData(data, imageData.width, imageData.height, newimageDataSettings as ImageDataSettings);
                shadowCtx.putImageData(newImageData, 0, 0);
            }
            
            return shadowCanvas.toDataURL();
        }
        throw new Error('DOM Error: Could not initialize Image Context.');
    }
    throw new Error('Not enough capacity: The input image is too small to store the given message.');
};
