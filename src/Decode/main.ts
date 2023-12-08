/*
 * Copyright (C) 2023 Hyun Seo
 * Licensed under MIT
*/

import { Options } from "../../@types/Options";
import { loadImg } from "../Utils/DOMUtils";
import { findNextPrime } from "../Utils/MathUtils";
import { config } from "../config";

function messageCompleted (data: Uint8ClampedArray, i: number) {
    let done = true;
    for (let j = 0; j < 16 && done; j += 1) {
      done = done && (data[i + j * 4] === 255);
    }
    return done
}

/**
 * Extracts text from image.
 *
 * @param   {HTMLImageElement} image Required: The image element that decoder requires as data source.
 * @param   {options} options Optional: Internal options. t: number, threshold: number, codeUnitSize: number
 * @returns {string} Returns extracted string
 */
export async function decode(image: (HTMLImageElement | string), options?: Options) {
    // Handle image url
    if (typeof image === 'string') {
        image = loadImg(image);
    } else if (image instanceof HTMLImageElement && image.src) {
        image = loadImg(image.src);
    } else {
        throw new Error('Invalid image input: The input image is neither an URL string nor an image.');
    }

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
      const modMessage: number[] = [];

      let i: number, done: boolean;

      if (threshold === 1) {
        for (i = 3, done = false; !done && i < data.length && !done; i += 4) {
          done = messageCompleted(data, i);
          if (!done) {
            modMessage.push(data[i] - (255 - prime + 1));
          }
        }
      }
    
      let message = "", charCode = 0, bitCount = 0;
      const mask = Math.pow(2, codeUnitSize) - 1;

      for (i = 0; i < modMessage.length; i += 1) {
        charCode += modMessage[i] << bitCount;
        bitCount += t;
        if (bitCount >= codeUnitSize) {
          message += String.fromCharCode(charCode & mask);
          bitCount %= codeUnitSize;
          charCode = modMessage[i] >> (t - bitCount);
        }
      }

      if(charCode !== 0) {
        message += String.fromCharCode(charCode & mask);
      }
    
      return message;
    }
    throw new Error('DOM Error: Could not initialize Image Context.');
};