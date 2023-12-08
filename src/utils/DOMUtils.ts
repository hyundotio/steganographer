/*
 * Copyright (C) 2023 Hyun Seo
 * Licensed under MIT
*/

/**
 * Takes in a string and returns an HTMLImageElement
 *
 * @param   {string} url Required: The url of the image.
 * @returns {HTMLImageElement} Returns HTMLImageElement
 */
export function loadImg (url: string): HTMLImageElement {
    const image = new Image();
    image.src = url;
    return image;
}