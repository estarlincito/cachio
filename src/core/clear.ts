import { save } from '@/utils/save.js';

import { cache } from './cache.js';

/**
 * Clears all entries from the cache and persists the empty state to disk.
 *
 * @async
 * @returns {Promise<void>} Resolves when the cache has been cleared and saved.
 */
export const clear = async (): Promise<void> => {
  cache.clear();
  await save(cache);
};
