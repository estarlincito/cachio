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
