import { cache } from './cache.js';

/**
 * Returns an iterator over the keys in the cache.
 *
 * @returns {IterableIterator<string>} An iterator over all cache keys.
 */
export const keys: () => IterableIterator<string> = cache.keys.bind(cache);
