import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { getConfig } from '@/core/config.js';

export const getFilePath = async () => {
  const config = await getConfig();
  const dir = config?.directory
    ? path.join(process.cwd(), config.directory)
    : os.tmpdir();
  await fs.mkdir(dir, { recursive: true });
  return path.join(dir, `${config?.name ?? 'cachio'}.json`);
};
