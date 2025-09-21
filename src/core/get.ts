import { cache } from './cache.js';

/**
 * Retrieves the value associated with a key in the cache.
 *
 * @param {string} key - The key to look up.
 * @returns {string | number | boolean | undefined} The value associated with the key, or `undefined` if the key does not exist.
 */
export const get: (key: string) => string | number | boolean | undefined =
  cache.get.bind(cache);
