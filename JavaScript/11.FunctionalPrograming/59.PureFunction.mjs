// pure_functions.mjs

// 1. Introduction to Pure Functions
console.log("1. Introduction to Pure Functions:");

// Pure functions are functions that satisfy two criteria:
// - Given the same input, they always return the same output.
// - They don't produce side effects, meaning they don't modify external state or rely on external state.

// 2. Example of a Pure Function
console.log("\n2. Example of a Pure Function:");

// Example:
function add(a, b) {
    return a + b;
}

const result1 = add(3, 4);
const result2 = add(3, 4);

console.log("Result 1:", result1); // Output: Result 1: 7
console.log("Result 2:", result2); // Output: Result 2: 7

// Pure functions always produce the same output for the same input.

// 3. Benefits of Pure Functions
console.log("\n3. Benefits of Pure Functions:");

// - Predictability: Pure functions produce predictable results, making code easier to understand, reason about, and debug.
// - Testability: Pure functions are easy to test since they only depend on their input parameters.
// - Reusability: Pure functions can be reused in different contexts without worrying about unexpected side effects.
// - Referential Transparency: Pure functions can be replaced with their return values without changing the program's behavior, enabling optimization and parallelization.

// 4. Example of Impure Function
console.log("\n4. Example of Impure Function:");

// Example of an impure function:
let counter = 0;

function increment() {
    counter++;
    return counter;
}

console.log("Counter after increment:", increment()); // Output: Counter after increment: 1
console.log("Counter after increment:", increment()); // Output: Counter after increment: 2

// The counter variable is external state modified by the impure function increment, making it impure.

// 5. Use Cases of Pure Functions
console.log("\n5. Use Cases of Pure Functions:");

// changing impure into pure functions.

const array = [1, 2, 3, 4, 5]

// this is a impure function
function addElement(arr, element) {
    arr.push(element)
    // return arr
}

console.log("the element added:- ", addElement(array, 78));
// addElement(array, 78);
console.log(array);
// the Above is the impure as it changed the original array itself outside

// the pure function implementaion is 
function addElement2(arr, element) {
    return [...arr, element]
}

console.log("the elemnt added:- ", addElement2(array, 99));
console.log(array);

// - Data Transformation: Pure functions are ideal for tasks involving data transformation, such as mapping, filtering, and reducing arrays.
// - State Management: Pure functions can be used to manage application state immutably, enabling predictable state changes and easier debugging.

// Pure functions are a foundational concept in functional programming, enabling developers to write clear, predictable, and maintainable code.
