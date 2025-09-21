import type { Value } from '@/utils/load.js';
import { save } from '@/utils/save.js';

import { cache } from './cache.js';

/**
 * Sets a key-value pair in the cache and persists it to disk.
 *
 * @async
 * @param {string} key - The key to set in the cache.
 * @param {Value} value - The value to associate with the key.
 * @returns {Promise<Map<string, Value>>} Resolves to the updated cache Map.
 */
export const set = async (
  key: string,
  value: Value,
): Promise<Map<string, Value>> => {
  cache.set(key, value);
  await save(cache);
  return cache;
};
