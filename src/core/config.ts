import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Cache configuration.
 */
export interface Config {
  /** Name of the cache file (without extension). */
  name?: string;

  /** Directory where the cache file will be saved. */
  directory?: string;
}

/**
 * Define cache configuration.
 * Returns the provided config object as-is.
 *
 * @param config - Partial configuration object.
 * @returns The same configuration object.
 *
 * @example
 * ```ts
 * import { defineConfig } from './config';
 * const config = defineConfig({ name: 'my-cache', directory: './data' });
 * ```
 */
export const defineConfig = (config: Config = {}): Config => config;

export const getConfigPath = () =>
  ['cachio.config.mjs']
    .map((f) => path.resolve(process.cwd(), f))
    .find((f) =>
      fs
        .access(f)
        .then(() => true)
        .catch(() => false),
    );

export const getConfig = async (): Promise<Config | null> => {
  const configPath = getConfigPath();
  if (!configPath) return null;
  try {
    const mod = await import(configPath);

    return (mod.default ?? mod) as Config;
  } catch {
    return null;
  }
};
