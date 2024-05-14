// polyfill.mjs

// 1. Introduction to Polyfills
console.log("1. Introduction to Polyfills:");

// Polyfills are pieces of code that implement the features of newer JavaScript APIs in older browsers that do not support them natively. They allow developers to use modern JavaScript features while ensuring compatibility with older browser versions.

// 2. Example of a Polyfill
console.log("\n2. Example of a Polyfill:");

// Here's a simple polyfill for the `Array.prototype.includes()` method, which is not supported in some older browsers:

if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }

        var O = Object(this);
        var len = O.length >>> 0;

        if (len === 0) {
            return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while (k < len) {
            if (O[k] === searchElement) {
                return true;
            }
            k++;
        }

        return false;
    };
}

// Now, you can use `Array.prototype.includes()` in all browsers, even those that don't support it natively.

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log("Array includes 3:", array.includes(3)); // Output: Array includes 3: true

// 3. Use Cases of Polyfills
console.log("\n3. Use Cases of Polyfills:");

// - Providing compatibility with older browsers
// - Using modern JavaScript features without worrying about browser support

// 4. Benefits of Polyfills
console.log("\n4. Benefits of Polyfills:");

// - Ensures compatibility with older browsers
// - Enables the use of modern JavaScript features in all browsers

// Polyfills play a crucial role in ensuring compatibility with older browsers and enabling the adoption of modern JavaScript features across different browser versions.
