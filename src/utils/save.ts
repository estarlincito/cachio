import fs from 'node:fs/promises';

import type { Cache } from '@/core/cache.js';
import { getFilePath } from '@/utils/path.js';

import { validateCache } from './validate.js';

export const save = async (cache: Cache) => {
  try {
    validateCache(cache);
    const filePath = await getFilePath();
    await fs.writeFile(
      filePath,
      JSON.stringify(Object.fromEntries(cache), null, 2),
    );
  } catch (error) {
    throw new TypeError(`Failed saving data: ${(error as Error).message}`);
  }
};
