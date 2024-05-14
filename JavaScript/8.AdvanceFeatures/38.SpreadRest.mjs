// spread_and_rest.mjs

// 1. Introduction to Spread and Rest Operators
console.log("1. Introduction to Spread and Rest Operators:");

// Spread and Rest operators are powerful features introduced in JavaScript that provide convenient ways to work with arrays and objects.

// 2. Spread Operator
console.log("\n2. Spread Operator:");

// The spread operator (…) allows an iterable (such as an array or string) to be expanded into individual elements. It can be used to make copies of arrays, merge arrays, or pass multiple arguments to functions.

// Example:
// Making a copy of an array
const numbers = [1, 2, 3];
const copyNumbers = [...numbers];

console.log("Copied Numbers:", copyNumbers); // Output: [1, 2, 3]

// Merging arrays
const moreNumbers = [4, 5, 6];
const mergedNumbers = [...numbers, ...moreNumbers];

console.log("Merged Numbers:", mergedNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Passing multiple arguments to a function
function sum(a, b, c) {
    return a + b + c;
}

const values = [1, 2, 3];
const result = sum(...values);

console.log("Sum:", result); // Output: 6

// 3. Rest Parameter
console.log("\n3. Rest Parameter:");

// The rest parameter (...) allows a function to accept an indefinite number of arguments as an array. It collects remaining arguments into a single parameter, making it easier to work with variable-length argument lists.

// Example:
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

const multipliedNumbers = multiply(2, 1, 2, 3, 4);

console.log("Multiplied Numbers:", multipliedNumbers); // Output: [2, 4, 6, 8]

// 4. Differences between Spread and Rest
console.log("\n4. Differences between Spread and Rest:");

// - Spread operator is used to expand elements (e.g., arrays or strings), while rest parameter is used to collect elements into an array.
// - Spread operator is used in function calls or array/object literals, while rest parameter is used in function declarations or definitions.
// - Spread operator is used to spread elements, while rest parameter is used to gather elements.

// Example:
// Spread operator in array literals
const arr = [1, 2, ...[3, 4]];

// Rest parameter in function definitions
function exampleFunction(...args) {
    console.log("Arguments:", args);
}

exampleFunction(1, 2, 3);

// 5. Uses of Spread and Rest
console.log("\n5. Uses of Spread and Rest:");

// - Spread operator is commonly used for making copies of arrays, merging arrays, and passing multiple arguments to functions.
// - Rest parameter is useful for handling variable-length argument lists in functions and working with unknown numbers of arguments.

// Example:
// Making a copy of an array using spread operator
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

// Using rest parameter to calculate the sum of numbers
function calculateSum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const sumResult = calculateSum(1, 2, 3, 4, 5);

console.log("Sum Result:", sumResult); // Output: 15

// Spread and rest operators are versatile tools in JavaScript for working with arrays and functions, providing concise and flexible syntax for common tasks.
