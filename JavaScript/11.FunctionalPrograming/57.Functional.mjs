// functional_programming.mjs

// 1. Introduction to Functional Programming
console.log("1. Introduction to Functional Programming:");

// Functional programming is a programming paradigm focused on composing functions to perform computations. It emphasizes the use of pure functions, immutable data, and avoiding side effects.

// 2. Pure Functions
console.log("\n2. Pure Functions:");

// Pure functions are functions that return the same output for the same input and have no side effects. They rely only on their input parameters and don't modify external state.

// Example:
function add(a, b) {
    return a + b;
}

console.log("Result of add(3, 4):", add(3, 4)); // Output: Result of add(3, 4): 7

// 3. Immutability
console.log("\n3. Immutability:");

// Immutability refers to the principle of not changing the state of data once it's created. Instead of modifying existing data, new data is created with the desired changes.

// Example:
const numbers = [1, 2, 3, 4];

// Instead of mutating the original array, create a new array with the desired changes using array methods like map, filter, and reduce.
const doubledNumbers = numbers.map(num => num * 2);

console.log("Original Array:", numbers); // Output: Original Array: [1, 2, 3, 4]
console.log("Doubled Array:", doubledNumbers); // Output: Doubled Array: [2, 4, 6, 8]

// 4. Avoiding Side Effects
console.log("\n4. Avoiding Side Effects:");

// Side effects occur when a function modifies external state or interacts with the outside world in some way. Functional programming seeks to minimize or eliminate side effects.

// Example with side effect:
let counter = 0;

function increment() {
    counter++;
}

increment();
console.log("Counter after increment:", counter); // Output: Counter after increment: 1

// Example without side effect (using a pure function):
function incrementPure(counter) {
    return counter + 1;
}

let newCounter = incrementPure(counter);
console.log("New Counter after increment:", newCounter); // Output: New Counter after increment: 1

// 5. Differences and Use Cases
console.log("\n5. Differences and Use Cases:");

// - Imperative programming: Focuses on how to achieve a task, often involving changing state and using control structures like loops and conditionals.
// - Functional programming: Focuses on what needs to be achieved, using function composition and avoiding mutable state and side effects.

// Functional programming is well-suited for tasks that involve data transformation, manipulation, and processing, such as filtering, mapping, and reducing arrays.

// 6. Benefits of Functional Programming
console.log("\n6. Benefits of Functional Programming:");

// - Predictability: Pure functions produce predictable results, making code easier to reason about and debug.
// - Reusability: Functions can be composed and reused in different contexts, promoting code reuse and modularity.
// - Concurrency: Immutable data and pure functions facilitate concurrent programming by minimizing shared state and side effects.

// Functional programming encourages writing clear, concise, and maintainable code by emphasizing pure functions, immutability, and avoiding side effects.
