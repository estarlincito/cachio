import { load } from './load.js';

/**
 * Find a value in the JSON cache by key.
 *
 * @async
 * @param key - The key to look up.
 * @returns {Promise<string | number | boolean | undefined>} The value for the key, or undefined if not found.
 *
 * @example
 * ```ts
 * const username = await find("username");
 * console.log(username); // e.g., "silentwave"
 * ```
 */
export const find = async (
  key: string,
): Promise<string | number | boolean | undefined> => {
  if (typeof key !== 'string') {
    throw new TypeError('Key must be a string');
  }
  const jsonData = await load();

  return jsonData?.[key];
};
