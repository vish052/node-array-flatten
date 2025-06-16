# node-array-flatten

A modern, efficient, and lightweight utility for flattening nested arrays in Node.js and JavaScript environments. This package leverages the native `Array.prototype.flat()` method for optimal performance and simplicity, providing a robust solution for transforming multi-dimensional arrays into single-dimensional ones.

## Features

* **Optimal Performance:** Utilizes the highly optimized native `Array.prototype.flat()` for fast array flattening.
* **Depth Control:** Supports flattening to a specified depth or completely flattening all nested arrays.
* **Simple API:** Easy to use with a clear and intuitive function signature.
* **Robust Input Validation:** Ensures the input is always an array, throwing an error for invalid types.

## Installation

```bash
npm install node-array-flatten
```

## Usage Example

The `flatten` function takes an array as its first argument and an optional `depth` as its second argument.

### Basic Usage (Deep Flatten)
By default, if no `depth` is specified, the function performs a deep flatten, concatenating all sub-array elements into a single-dimensional array, regardless of nesting level.

```bash
// For CommonJS (Node.js older versions or default Node.js modules)
const flatten = require('node-array-flatten');

// For ES Modules (modern Node.js with type: "module" in package.json)
// import flatten from 'node-array-flatten';

const nestedArray = [1, [2, 3], 4, [5, [6, 7], null, undefined, 0, false]];
const flattenedArray = flatten(nestedArray);

console.log('Deep Flatten Example:');
console.log(flattenedArray);
// Expected Output: [1, 2, 3, 4, 5, 6, 7, null, undefined, 0, false]
```

### Flattening to a Specific Depth
You can control how many levels deep the array is flattened by providing a `depth` argument.

```bash
const deeplyNested = [1, [2, [3, 4]], 5, [6, [7, [8, 9]]]];

// Flatten one level deep
const oneLevelFlattened = flatten(deeplyNested, 1);
console.log('\nFlatten 1 Level Deep:');
console.log(oneLevelFlattened);
// Expected Output: [1, 2, [3, 4], 5, 6, [7, [8, 9]]]

// Flatten two levels deep
const twoLevelsFlattened = flatten(deeplyNested, 2);
console.log('\nFlatten 2 Levels Deep:');
console.log(twoLevelsFlattened);
// Expected Output: [1, 2, 3, 4, 5, 6, 7, [8, 9]]

// Explicitly flatten all levels (same as default if no depth is given)
const infinityFlattened = flatten(deeplyNested, Infinity);
console.log('\nFlatten All Levels (Infinity):');
console.log(infinityFlattened);
// Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
### Handling Invalid Input
The function strictly requires an array as input. Passing a non-array value will result in an error.

```bash
try {
    flatten('This is not an array!');
} catch (error) {
    console.error('\nError Example:');
    console.error(error.message);
}
// Expected Output: Error: Input must be an array!

try {
    flatten(123);
} catch (error) {
    console.error(error.message);
}
// Expected Output: Error: Input must be an array!
```

Here's the Markdown text for your API, Compatibility, Contributing, and License sections, formatted clearly for your `README.md` file:

---

## API

### `flatten(arr, [depth])`

* `arr` (**Array**, **required**): The array to be flattened.
* `depth` (**number**, optional, default: `Infinity`): The number of levels to flatten.
    * Set to `1` to flatten only the first level of nested arrays.
    * Set to `Infinity` (or omit) to flatten all nested arrays recursively into a single-dimensional array.

**Returns:** A new **Array** with the sub-array elements concatenated into it.

**Throws:** An **Error** if `arr` is not an array.

---

## Compatibility

This package relies on `Array.prototype.flat()`, which is natively available in Node.js versions `>=12.0.0`. If you need to support older Node.js environments, consider polyfilling `Array.prototype.flat()` or using a different flattening utility.

---

## Contributing

We welcome contributions to `node-array-flatten`! If you have suggestions for improvements, bug reports, or want to contribute code, please feel free to:

1.  **Open an issue:** Describe the bug or feature request in detail.
2.  **Submit a pull request:**
    * Fork the repository.
    * Create a new branch for your feature or bug fix.
    * Write clear, concise code that adheres to the project's style.
    * Add or update tests to cover your changes.
    * Ensure all tests pass.
    * Submit your pull request, referencing any relevant issues.

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more details.
