/**
 * Flattens an array up to a specified depth.
 *
 * This function creates a new array with all sub-array elements concatenated into it
 * recursively up to the specified depth. It leverages the native `Array.prototype.flat()`
 * for optimal performance.
 *
 * @param {Array} arr The array to flatten.
 * @param {number} [depth=Infinity] The number of levels to flatten.
 * Defaults to `Infinity` for deep flattening (all levels).
 * @returns {Array} A new array with the sub-array elements concatenated.
 * @throws {Error} If the input `arr` is not an array.
 */
const flattenArray = function(arr, depth = Infinity) {
    // Robust input validation using Array.isArray()
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array!');
    }

    // Use the native Array.prototype.flat() method for efficiency and simplicity
    return arr.flat(depth);
};

module.exports = flattenArray;
