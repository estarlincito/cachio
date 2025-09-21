import fs from 'node:fs/promises';

import { getFilePath } from '@/utils/path.js';

import { load } from './load.js';

export interface JsonData {
  [key: string]: string | number | boolean;
}

const validateJsonData = (data: JsonData) => {
  for (const [key, value] of Object.entries(data)) {
    if (typeof key !== 'string') {
      throw new TypeError('Key must be a string');
    }
    if (
      typeof value !== 'string' &&
      typeof value !== 'number' &&
      typeof value !== 'boolean'
    ) {
      throw new TypeError(
        `Invalid value for key "${key}": must be string, number, or boolean`,
      );
    }
  }
};

/**
 * Add new data to the JSON cache.
 * Merges with existing data, overwriting duplicates.
 *
 * @async
 * @param jsonData - Object with data to add.
 * @returns {Promise<JsonData>} The updated cache data.
 * @throws {TypeError} If invalid data types or write errors occur.
 *
 * @example
 * ```ts
 * await add({ username: "silentwave", age: 18, active: true });
 * ```
 */
export const add = async (jsonData: JsonData): Promise<JsonData> => {
  try {
    validateJsonData(jsonData);
    const existingData = (await load()) ?? {};
    const newJsonData = { ...existingData, ...jsonData };
    const filePath = await getFilePath();
    await fs.writeFile(filePath, JSON.stringify(newJsonData, null, 2));
    return newJsonData;
  } catch (error) {
    throw new TypeError(`Failed to add data: ${(error as Error).message}`);
  }
};
