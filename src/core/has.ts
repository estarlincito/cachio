import { cache } from './cache.js';

/**
 * Checks if a key exists in the cache.
 *
 * @param {string} key - The key to check.
 * @returns {boolean} `true` if the key exists, `false` otherwise.
 */
export const has: (key: string) => boolean = cache.has.bind(cache);
