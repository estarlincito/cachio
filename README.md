# Cachio

[![NPM version](https://img.shields.io/npm/v/cachio.svg?style=flat)](https://npmjs.org/package/cachio)

> A simple JSON-based caching utility with CLI and API support.

`Cachio` is a lightweight utility for managing key-value JSON caches in Node.js, with support for custom file paths, TypeScript, and a command-line interface.

---

## Features ✨

- 🔹 **Simple API**: Manage key-value pairs with methods like `set`, `get`, `delete`, and more.
- 🚀 **CLI Ready**: Control the cache via terminal with commands like `--set`, `--get`, and `--clear`.
- 🔄 **Configurable Storage**: Customize cache file name and directory via a config file.
- 🌐 **Cross-Platform**: Works in modern Node.js environments with TypeScript support.
- ⚡ **Fast & Minimal**: Async I/O operations with robust error handling and type validation.

## Installation 💿

```bash
# Using npm
npm install cachio

# Using pnpm
pnpm add cachio

# Using yarn
yarn add cachio
```

## Usage 📦

### API \</>

The `cachio` module provides a simple API for managing a key-value cache stored as a JSON file. Below are the available functions with JSDoc documentation.

```typescript
import * as cachio from 'cachio';

// Access the cache Map
console.log(cachio.cache); // Map {}

// Add or update a key-value pair
await cachio.set('name', 'John');
console.log(cachio.cache); // Map { 'name' => 'John' }

await cachio.set('age', 30);
await cachio.set('active', true);
console.log(cachio.cache); // Map { 'name' => 'John', 'age' => 30, 'active' => true }

// Retrieve a value by key
console.log(cachio.get('name')); // 'John'
console.log(cachio.get('unknown')); // undefined

// Remove a key
await cachio.delete('age');
console.log(cachio.cache); // Map { 'name' => 'John', 'active' => true }

// Check if a key exists
console.log(cachio.has('name')); // true
console.log(cachio.has('age')); // false

// Clear the entire cache
await cachio.clear();
console.log(cachio.cache); // Map {}

// Get all key-value pairs
await cachio.set('name', 'John');
await cachio.set('age', 30);
console.log([...cachio.entries()]); // [['name', 'John'], ['age', 30]]

// Iterate over the cache
cachio.forEach((value, key) => console.log(`${key}: ${value}`));
// Output:
// name: John
// age: 30

// Get all keys
console.log([...cachio.keys()]); // ['name', 'age']

// Get all values
console.log([...cachio.values()]); // ['John', 30]

// Get the cache size
console.log(cachio.size()); // 2
```

### CLI 🖥️

```bash
#!/usr/bin/env node
cachio [command] [options]
```

#### Example Commands

```bash
# Add or update a key-value pair
cachio --set name=John
cachio --set age=30
cachio --set active=true

# Retrieve a value by key
cachio --get name

# Remove a key
cachio --delete age

# Check if a key exists
cachio --has name

# Display the entire cache
cachio --cache

# Clear the entire cache
cachio --clear

# List all keys
cachio --keys

# List all values
cachio --values

# List all key-value pairs
cachio --entries

# Display the cache size
cachio --size

# Iterate and print key-value pairs
cachio --forEach

# Show help
cachio --help

# Show version
cachio --version
```

#### CLI Options

```
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
```

### Configuration

Create a `cachio.config.mjs` file in your project root to customize the cache file name and storage path:

```javascript
import { defineConfig } from 'cachio/config';

export default defineConfig({
  name: 'my-cache',
  directory: './cache',
});
```

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
