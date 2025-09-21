// eslint-disable-next-line no-restricted-imports
import pkg from '../../package.json' with { type: 'json' };
export const version = pkg.version ?? {};
