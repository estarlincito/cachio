import { save } from '@/utils/save.js';

import { cache } from './cache.js';

/**
 * Deletes a key from the cache and persists the change if the key existed.
 *
 * @async
 * @param {string} key - The key to remove from the cache.
 * @returns {Promise<boolean>} Resolves to `true` if the key was deleted, `false` if it did not exist.
 */
export const deleteAsync = async (key: string): Promise<boolean> => {
  const isDeleted = cache.delete(key);
  if (isDeleted) await save(cache);
  return isDeleted;
};
