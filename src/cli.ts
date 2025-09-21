#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import * as cachio from './index.js';
import { version } from './utils/pkg.js';

const args = process.argv.slice(2);

const printHelp = () => {
  console.log(`
Usage: cachio <command> [options]

Commands:
  --set <key>=<value>      Add or update a key-value pair in the cache
  --get <key>              Retrieve a value by key
  --delete <key>           Remove a key from the cache
  --has <key>              Check if a key exists in the cache
  --cache                  Display the entire cache
  --clear                  Clear the entire cache
  --keys                   List all keys in the cache
  --values                 List all values in the cache
  --entries                List all key-value pairs in the cache
  --size                   Display the number of items in the cache
  --forEach                Iterate over the cache and print key-value pairs
  --help                   Show this help message
  --version                Show version

Examples:
  cachio --set name=John
  cachio --get name
  cachio --delete name
  cachio --has name
  cachio --cache
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
      case '--set': {
        if (!args[1]) throw new TypeError('Missing key=value argument');
        const [key, value] = parseKeyValue(args[1]);
        await cachio.set(key, value);
        console.log('Set:', { [key]: value });
        break;
      }
      case '--get': {
        if (!args[1]) throw new TypeError('Missing key argument');
        const result = cachio.get(args[1]);
        console.log('Value:', result ?? 'Not found');
        break;
      }
      case '--delete': {
        if (!args[1]) throw new TypeError('Missing key argument');
        const result = await cachio.delete(args[1]);
        console.log('Deleted:', result ? 'Success' : 'Key not found');
        break;
      }
      case '--has': {
        if (!args[1]) throw new TypeError('Missing key argument');
        const result = cachio.has(args[1]);
        console.log('Exists:', result);
        break;
      }
      case '--cache': {
        const cacheObj = Object.fromEntries(cachio.cache);
        console.log('Cache:', cacheObj);
        break;
      }
      case '--clear': {
        await cachio.clear();
        console.log('Cache cleared');
        break;
      }
      case '--keys': {
        const keys = [...cachio.keys()];
        console.log('Keys:', keys.length ? keys : 'No keys found');
        break;
      }
      case '--values': {
        const values = [...cachio.values()];
        console.log('Values:', values.length ? values : 'No values found');
        break;
      }
      case '--entries': {
        const entries = [...cachio.entries()];
        console.log(
          'Entries:',
          entries.length ? Object.fromEntries(entries) : 'No entries found',
        );
        break;
      }
      case '--size': {
        const size = cachio.size();
        console.log('Size:', size);
        break;
      }
      case '--forEach': {
        let output = 'Cache contents:\n';
        cachio.forEach((value, key) => {
          output += `  ${key}: ${value}\n`;
        });
        console.log(output.trim() || 'Cache is empty');
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
        throw new TypeError(`Unknown command: ${args[0] || 'none'}`);
    }
  } catch (error: any) {
    console.error('Error:', error.message);
    printHelp();
    process.exit(1);
  }
};

await run();
