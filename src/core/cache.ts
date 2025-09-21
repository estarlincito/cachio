import { load, type Value } from '@/utils/load.js';

export type Cache = Map<string, Value>;

/**
 * Represents a simple key-value cache loaded from a JSON file.
 * Keys are strings and values can be string, number, or boolean.
 *
 * @type {Cache}
 */
export const cache: Cache = new Map<string, string | number | boolean>(
  Object.entries((await load()) ?? {}),
);
