// nan_undefined_null.mjs

// 1. NaN (Not a Number)
console.log("NaN (Not a Number):");

// NaN is a special value representing "Not a Number"
const resultNaN = parseInt("Hello");
console.log("Result of parseInt('Hello'):", resultNaN); // Output: NaN

// NaN is of type "number"
console.log("Type of NaN:", typeof NaN); // Output: "number"

// NaN is not equal to itself
console.log("NaN === NaN:", NaN === NaN); // Output: false

// Use case: Checking for numeric input
function squareRoot(num) {
    if (isNaN(num)) {
        return "Invalid input. Please enter a number.";
    }
    return Math.sqrt(num);
}

console.log("Square root of 'Hello':", squareRoot("Hello")); // Output: "Invalid input. Please enter a number."

// 2. Undefined
console.log("\nUndefined:");

// Undefined represents a variable that has been declared but has not been assigned a value
let undefinedVariable;
console.log("Value of undefined variable:", undefinedVariable); // Output: undefined

// Undefined is a primitive value and its type is "undefined"
console.log("Type of undefined:", typeof undefined); // Output: "undefined"

// Use case: Default parameter values
function greet(name) {
    name = name || "Guest";
    return "Hello, " + name + "!";
}

console.log("Greeting without parameter:", greet()); // Output: "Hello, Guest!"
console.log("Greeting with parameter:", greet("Alice")); // Output: "Hello, Alice!"

// 3. Null
console.log("\nNull:");

// Null represents an intentional absence of any value or object
const nullValue = null;
console.log("Value of null variable:", nullValue); // Output: null

// Null is a primitive value and its type is "object"
console.log("Type of null:", typeof null); // Output: "object"

// Use case: Resetting object references
let user = { name: "John" };
user = null;
console.log("User object after setting to null:", user); // Output: null
