# Cachio

[![NPM version](https://img.shields.io/npm/v/cachio.svg?style=flat)](https://npmjs.org/package/cachio)

> A simple JSON-based caching utility with CLI and API support.

`Cachio` — a lightweight utility for managing key-value JSON caches in Node.js, with support for custom file paths, TypeScript, and a command-line interface.

---

## Features ✨

- 🔹 **Simple API**: Add, remove, find, and load key-value pairs in a JSON cache.
- 🚀 **CLI Ready**: Manage cache via terminal with commands like `--add`, `--find`, and `--remove`.
- 🔄 **Configurable Storage**: Customize cache file name and directory via a config file.
- 🌐 **Cross-Platform**: Works in modern Node.js environments with TypeScript support.
- ⚡ **Fast & Minimal**: Async I/O operations with robust error handling.

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

```ts
import * as cachio from 'cachio';

// Define a custom config (optional)
const config = defineConfig({
  name: 'my-cache',
  directory: './cache',
});

// Add a key-value pair
await cachio.add({ name: 'John', age: 30 });
console.log(await cachio.load()); // { name: "John", age: 30 }

// Find a value
console.log(await cachio.find('name')); // "John"

// Remove a key
await cachio.remove('age');
console.log(await cachio.load()); // { name: "John" }
```

### CLI 🖥️

```bash
#!/usr/bin/env node
cachio [command] [options]
```

#### Example Commands

```bash
# Add a key-value pair
cachio --add name=John

# Add multiple key-value pairs
cachio --add age=30

# Find a value by key
cachio --find name

# Remove a key
cachio --remove age

# Load the entire cache
cachio --load

# Reset the cache
cachio --reset

# Show help
cachio --help
```

#### CLI Options

```
  --add <key>=<value>    Add a key-value pair to the cache
  --remove <key>         Remove a key from the cache
  --find <key>           Find a value by key
  --load                 Load and display the entire cache
  --reset                Clear the entire cache
  --help                 Show this help message
  --version              Show version
```

### Configuration

Create an `cachio.config.mjs` file in your project root to customize the cache file name and storage path:

```javascript
export default {
  name: 'my-cache',
  directory: './cache',
};
```

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
