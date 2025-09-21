import { cache } from './cache.js';

/**
 * Executes a provided callback once for each key-value pair in the cache.
 *
 * @param {(value: string | number | boolean, key: string, map: Map<string, string | number | boolean>) => void} callbackfn
 *   Function to execute for each entry.
 */
export const forEach: (
  callbackfn: (
    value: string | number | boolean,
    key: string,
    map: Map<string, string | number | boolean>,
  ) => void,
) => void = cache.forEach.bind(cache);
