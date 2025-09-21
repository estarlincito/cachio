import fs from 'node:fs/promises';

import { getFilePath } from '@/utils/path.js';

import type { JsonData } from './add.js';
import { load } from './load.js';

/**
 * Remove a key from the JSON cache.
 *
 * @async
 * @param key - The key to remove.
 * @returns {Promise<JsonData>} The updated cache data after removal.
 * @throws {TypeError} If an error occurs while reading or writing the cache.
 *
 * @example
 * ```ts
 * await remove("username");
 * ```
 */
export const remove = async (key: string): Promise<JsonData> => {
  if (typeof key !== 'string') {
    throw new TypeError('Key must be a string');
  }

  try {
    const existingData = (await load()) ?? {};
    const newJsonData = Object.fromEntries(
      Object.entries(existingData).filter(([k]) => k !== key),
    );
    const filePath = await getFilePath();
    await fs.writeFile(filePath, JSON.stringify(newJsonData, null, 2));
    return newJsonData;
  } catch (error) {
    throw new TypeError(
      `Failed to remove key "${key}": ${(error as Error).message}`,
    );
  }
};
