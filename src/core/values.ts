import { cache } from './cache.js';

/**
 * Returns an iterator over the values in the cache.
 *
 * @returns {IterableIterator<string | number | boolean>} An iterator over all cache values.
 */
export const values: () => IterableIterator<string | number | boolean> =
  cache.values.bind(cache);
