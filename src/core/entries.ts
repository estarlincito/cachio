import { cache } from './cache.js';

/**
 * Returns an iterator over the [key, value] entries of the cache.
 *
 * @returns {IterableIterator<[string, string | number | boolean]>} Iterator of cache entries
 */
export const entries = cache.entries.bind(cache);
