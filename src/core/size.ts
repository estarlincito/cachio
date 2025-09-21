import { cache } from './cache.js';

/**
 * Returns the number of entries in the cache.
 *
 * @returns {number} Current number of items in the cache.
 */
export const size = (): number => cache.size;
