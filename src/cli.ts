#!/usr/bin/env node
/* eslint-disable no-console */

import { add, find, load, remove } from './index.js';
import { version } from './utils/pkg.js';

const args = process.argv.slice(2);

const printHelp = () => {
  console.log(`
Usage: cachio <command> [options]

Commands:
  --add <key>=<value>    Add a key-value pair to the cache
  --remove <key>         Remove a key from the cache
  --find <key>           Find a value by key
  --load                 Load and display the entire cache
  --reset                Clear the entire cache
  --help                 Show this help message
  --version              Show version
`);
};

const parseKeyValue = (arg: string): [string, string | number | boolean] => {
  const [key, value] = arg.split('=');
  if (!key || !value) throw new TypeError('Invalid key=value format');
  if (value === 'true') return [key, true];
  if (value === 'false') return [key, false];
  const num = Number(value);

  return [key, isNaN(num) ? value : num];
};

const run = async () => {
  try {
    switch (args[0]) {
      case '--add': {
        if (!args[1]) throw new TypeError('Missing key=value argument');
        const [key, value] = parseKeyValue(args[1]);
        const result = await add({ [key]: value });
        console.log('Added:', result);
        break;
      }
      case '--remove': {
        if (!args[1]) throw new TypeError('Missing key argument');
        const result = await remove(args[1]);
        console.log('Removed:', result);
        break;
      }
      case '--find': {
        if (!args[1]) throw new TypeError('Missing key argument');
        const result = await find(args[1]);
        console.log('Found:', result ?? 'Not found');
        break;
      }
      case '--load': {
        const result = await load();
        console.log('Cache:', result ?? 'Empty');
        break;
      }
      case '--reset': {
        const filePath = await import('./utils/path.js').then((m) =>
          m.getFilePath(),
        );
        await import('node:fs/promises').then((fs) =>
          fs.writeFile(filePath, '{}'),
        );
        console.log('Cache reset');
        break;
      }
      case '--help': {
        printHelp();
        break;
      }
      case '--version': {
        console.log(`cachio v${version}`);
        break;
      }
      default:
        throw new TypeError('Unknown command');
    }
  } catch (error) {
    console.error('Error:', (error as Error).message);
    printHelp();
    process.exit(1);
  }
};

await run();
