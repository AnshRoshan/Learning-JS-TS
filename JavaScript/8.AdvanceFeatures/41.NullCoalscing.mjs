// null_coalescing.mjs

// 1. Introduction to Null Coalescing Operator
console.log("1. Introduction to Null Coalescing Operator:");

// The Null Coalescing Operator (??) is a feature introduced in JavaScript that provides a concise way to handle null or undefined values by returning a default value if the operand is null or undefined.

// 2. Null Coalescing Operator Syntax
console.log("\n2. Null Coalescing Operator Syntax:");

// The syntax for the Null Coalescing Operator is double question marks (??). It checks if the left operand is null or undefined and returns the right operand if the left operand is null or undefined; otherwise, it returns the left operand.

// Example:
const defaultValue = "Default Value";
const userInput = null;

const result = userInput ?? defaultValue;

console.log("Result:", result); // Output: Result: Default Value

// 3. Null Coalescing with Falsy Values
console.log("\n3. Null Coalescing with Falsy Values:");

// The Null Coalescing Operator returns the right operand only if the left operand is null or undefined. It does not consider other falsy values such as empty strings, 0, false, or NaN.

// Example:
const value = 0;
const defaultValue2 = "Default Value";

const result2 = value ?? defaultValue2;

console.log("Result:", result2); // Output: Result: 0 (value is not null or undefined, so it's returned)

// 4. Use Cases of Null Coalescing Operator
console.log("\n4. Use Cases of Null Coalescing Operator:");

// - Providing default values for variables that may be null or undefined
// - Simplifying null or undefined checks in conditional expressions

// Example:
// Providing default values for variables that may be null or undefined
const userInput1 = null;
const userName = userInput1 ?? "Guest";

console.log("User Name:", userName); // Output: User Name: Guest

// Simplifying null or undefined checks in conditional expressions
const fetchData = () => {
    // Code to fetch data from an API
    return null; // Simulating no data returned from API
};

const data = fetchData() ?? "No data available";

console.log("Data:", data); // Output: Data: No data available

// The Null Coalescing Operator provides a concise and expressive way to handle null or undefined values in JavaScript, improving code readability and reducing the need for verbose null checks.
