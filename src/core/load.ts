import fs from 'node:fs/promises';

import { getFilePath } from '@/utils/path.js';

import type { JsonData } from './add.js';

/**
 * Load the JSON cache from file.
 *
 * @async
 * @returns {Promise<JsonData | null>} The cache data, or null if the file doesn't exist or can't be read.
 *
 * @example
 * ```ts
 * const data = await load();
 * console.log(data?.username);
 * ```
 */
export const load = async (): Promise<JsonData | null> => {
  try {
    const filePath = await getFilePath();
    const jsonData = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(jsonData) as JsonData;
  } catch {
    return null;
  }
};
