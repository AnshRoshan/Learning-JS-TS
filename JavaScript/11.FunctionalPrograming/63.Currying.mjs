// currying.mjs

// 1. Introduction to Currying
console.log("1. Introduction to Currying:");

// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of unary (single-argument) functions. This allows for partial application of the function, making it more flexible and composable.

// 2. Example of Currying
console.log("\n2. Example of Currying:");

// Example:
const curry = (fn, arity = fn.length) => {
    const curried = (...args) =>
        args.length >= arity
            ? fn(...args)
            : (...nextArgs) => curried(...args, ...nextArgs);
    return curried;
};

// Function to add three numbers
const add = (a, b, c) => a + b + c;

// Curried version of add function
const curriedAdd = curry(add);

console.log("Result of curried add function:", curriedAdd(2)(3)(4)); // Output: Result of curried add function: 9

// The curriedAdd function allows for partial application of the add function, accepting one argument at a time.

// 3. Uses of Currying
console.log("\n3. Uses of Currying:");

// - Partial Application: Currying enables partial application of functions, allowing you to create specialized versions of a function with some of its arguments pre-filled.
// - Function Composition: Currying facilitates function composition by breaking down functions into smaller, composable units that can be easily combined.
// - Flexibility: Curried functions provide flexibility by allowing functions to be applied incrementally, adapting to different use cases.

// Currying is a powerful technique in functional programming for building modular, reusable, and composable code.

// 4. Example of Currying with Function Composition
console.log("\n4. Example of Currying with Function Composition:");

// Example:
const multiply = x => y => x * y;
const addOne = x => x + 1;

// Compose functions using currying
const multiplyAndAddOne = curry((a, b) => addOne(multiply(a)(b)));

console.log("Result of composed curried function:", multiplyAndAddOne(2)(3)); // Output: Result of composed curried function: 7

// The multiplyAndAddOne function is composed using currying, allowing for partial application and function composition in a concise manner.
