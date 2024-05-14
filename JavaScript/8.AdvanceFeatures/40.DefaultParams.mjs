// default_parameters.mjs

// 1. Introduction to Default Parameters
console.log("1. Introduction to Default Parameters:");

// Default Parameters is a feature introduced in ES6 (ECMAScript 2015) that allows you to assign default values to function parameters. This feature simplifies function definitions and provides fallback values when arguments are not provided.

// 2. Default Parameter Syntax
console.log("\n2. Default Parameter Syntax:");

// In JavaScript, you can specify default values for function parameters using the assignment operator (=).

// Example:
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

// Calling the function without providing an argument
greet(); // Output: Hello, Guest!

// Calling the function with an argument
greet("John"); // Output: Hello, John!

// 3. Default Parameter Values
console.log("\n3. Default Parameter Values:");

// Default parameter values can be of any data type, including primitives, objects, arrays, or even function calls.

// Example:
function multiply(a, b = 2) {
    return a * b;
}

console.log("Multiplication:", multiply(3)); // Output: 6 (default value used)

// 4. Default Parameters and Truthy Values
console.log("\n4. Default Parameters and Truthy Values:");

// Default parameter values are only applied when the argument is undefined. Other falsy values such as null, 0, "", false, NaN do not trigger the default value.

// Example:
function example(value = "Default") {
    console.log("Value:", value);
}

example("");     // Output: Value: "" (empty string is a truthy value)
example(null);   // Output: Value: null
example(0);      // Output: Value: 0
example(false);  // Output: Value: false
example(NaN);    // Output: Value: NaN

// 5. Use Cases of Default Parameters
console.log("\n5. Use Cases of Default Parameters:");

// - Providing fallback values for optional function parameters
// - Simplifying function calls by reducing the need for conditional checks

// Example:
// Providing default values for optional parameters
function createUser(name, age = 18, email = "example@example.com") {
    // Code to create user with provided parameters
}

// Simplifying function calls by reducing the need for conditional checks
function printMessage(message = "No message provided") {
    console.log("Message:", message);
}

// Enhanced readability and conciseness in function definitions

// Default Parameters are a powerful feature in JavaScript for providing fallback values and simplifying function definitions. By leveraging Default Parameters, developers can write cleaner and more expressive code.
