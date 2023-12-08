/*
 * Copyright (C) 2023 Hyun Seo
 * Licensed under MIT
*/

import { Options } from "../../@types/Options";
import { Config } from "../../@types/Config";

/**
 * Calculates how long a string can fit into an image.
 *
 * @param   {HTMLImageElement} image Required: The image element that calculator requires as data source
 * @param   {config} config Required: Default in "./config.ts" Internal options. t: number, threshold: number, codeUnitSize: number
 * @param   {options} options Optional: Internal options. t: number, threshold: number, codeUnitSize: number
 * @returns {number} Returns a number that reflects the amount of character that can be stored in the provided image
 */
export function getHidingCapacity(image: HTMLImageElement, config: Config, options?: Options): number {
    const width = image.width;
    const height =  image.height;
    const t = options ? options.t : config.t;
    const codeUnitSize = options ? options.codeUnitSize : config.codeUnitSize;
    return t * width * height / codeUnitSize >> 0
}