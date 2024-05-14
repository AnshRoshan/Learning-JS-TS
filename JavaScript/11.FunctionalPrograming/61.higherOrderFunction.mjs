// higher_order_functions.mjs

// 1. Introduction to Higher-Order Functions
console.log("1. Introduction to Higher-Order Functions:");

// Higher-order functions are functions that can take other functions as arguments or return functions as results. They enable powerful abstractions and composition in functional programming.

// 2. Example of a Higher-Order Function
console.log("\n2. Example of a Higher-Order Function:");

// Example:
function operate(func, a, b) {
    return func(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const result1 = operate(add, 5, 3);
console.log("Result of addition:", result1); // Output: Result of addition: 8

const result2 = operate(subtract, 8, 3);
console.log("Result of subtraction:", result2); // Output: Result of subtraction: 5

// The operate function is a higher-order function that takes another function (func) as an argument and applies it to the provided arguments (a, b).

// 3. Uses of Higher-Order Functions
console.log("\n3. Uses of Higher-Order Functions:");

// - Abstraction: Higher-order functions enable the abstraction of common patterns and behaviors, leading to more concise and reusable code.
// - Composition: Higher-order functions allow functions to be composed together to create new functions with complex behaviors.
// - Callbacks: Higher-order functions are commonly used with callbacks to handle asynchronous operations, event handling, and iteration.

// 4. Example of Callbacks with Higher-Order Functions
console.log("\n4. Example of Callbacks with Higher-Order Functions:");

// Example:
function fetchData(url, callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log("Received data:", data);
}

fetchData("https://example.com/api/data", displayData); // Output: Received data: { id: 1, name: 'John' }

// The fetchData function is a higher-order function that takes a callback function (callback) as an argument and invokes it with the fetched data.

// 5. Benefits of Higher-Order Functions
console.log("\n5. Benefits of Higher-Order Functions:");

// - Flexibility: Higher-order functions provide flexibility by allowing behavior to be parameterized and customized through function arguments.
// - Reusability: Higher-order functions promote code reuse by enabling common behaviors to be encapsulated and reused across different contexts.
// - Composability: Higher-order functions facilitate function composition, allowing small, composable functions to be combined to create more complex behaviors.

// Higher-order functions are a powerful tool in functional programming for creating modular, reusable, and maintainable code.
