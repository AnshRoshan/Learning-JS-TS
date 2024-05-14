// type_coercion.mjs

// 1. Implicit Type Coercion
console.log("Implicit Type Coercion:");

// Adding a string and a number
const stringNumberAddition = "10" + 5;
console.log("String + Number:", stringNumberAddition); // Output: "105"

// Subtracting a number from a string
const stringNumberSubtraction = "10" - 5;
console.log("String - Number:", stringNumberSubtraction); // Output: 5

// 2. Explicit Type Conversion
console.log("\nExplicit Type Conversion:");

// Converting a string to a number using parseInt() and parseFloat()
const stringToInt = parseInt("10");
const stringToFloat = parseFloat("10.5");
console.log("String to Int:", stringToInt); // Output: 10
console.log("String to Float:", stringToFloat); // Output: 10.5

// Converting a number to a string using toString()
const numberToString = (5).toString();
console.log("Number to String:", numberToString); // Output: "5"

// 3. Truthy and Falsy Values
console.log("\nTruthy and Falsy Values:");

// Examples of falsy values
console.log("Falsy Values:");
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(false)); // Output: false
console.log(Boolean(NaN)); // Output: false

// Examples of truthy values
console.log("Truthy Values:");
console.log(Boolean("Hello")); // Output: true
console.log(Boolean(10)); // Output: true
console.log(Boolean({})); // Output: true
console.log(Boolean([])); // Output: true
console.log(Boolean(function () { })); // Output: true

// 4. Loose Equality (==) vs Strict Equality (===)
console.log("\nLoose Equality (==) vs Strict Equality (===):");

// Loose equality (==) allows type coercion
console.log("Loose Equality:");
console.log(5 == "5"); // Output: true

// Strict equality (===) does not allow type coercion
console.log("Strict Equality:");
console.log(5 === "5"); // Output: false

// 5. Use Cases of Type Coercion
console.log("\nUse Cases of Type Coercion:");

// Example: Concatenating strings with other data types
const userName = "John";
const userAge = 30;
console.log("User:", "Name: " + userName + ", Age: " + userAge); // Output: "User: Name: John, Age: 30"

// Example: Checking if a value is defined or not
let inputValue;
if (inputValue) {
    console.log("Input value is defined.");
} else {
    console.log("Input value is not defined.");
} // Output: "Input value is not defined."
