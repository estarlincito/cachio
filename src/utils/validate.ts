import type { Cache } from '@/core/cache.js';

export const validateCache = (cache: Cache) => {
  cache.forEach((value, key) => {
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
  });
};
