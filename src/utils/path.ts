import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import type { Config } from '@/core/config.js';

const getConfigPath = () =>
  ['cachio.config.mjs']
    .map((f) => path.resolve(process.cwd(), f))
    .find((f) =>
      fs
        .access(f)
        .then(() => true)
        .catch(() => false),
    );

const getConfig = async (): Promise<Config | null> => {
  const configPath = getConfigPath();
  if (!configPath) return null;
  try {
    const mod = await import(configPath);

    return (mod.default ?? mod) as Config;
  } catch {
    return null;
  }
};

export const getFilePath = async () => {
  const config = await getConfig();
  const dir = config?.directory
    ? path.join(process.cwd(), config.directory)
    : os.tmpdir();
  await fs.mkdir(dir, { recursive: true });
  return path.join(dir, `${config?.name ?? 'cachio'}.json`);
};
