// reference_vs_value.mjs

// 1. Value Types
console.log("Value Types:");

// Value types include primitive data types such as numbers, strings, booleans, null, and undefined.
// They are stored directly in memory locations.
let num1 = 10;
let num2 = num1; // num2 now holds a copy of the value of num1
num1 = 20; // Modifying num1 does not affect num2

console.log("num1:", num1); // Output: 20
console.log("num2:", num2); // Output: 10

// 2. Reference Types
console.log("\nReference Types:");

// Reference types include objects (arrays, objects, functions) and are stored as references to memory locations.
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 now holds a reference to the same array as arr1
arr1.push(4); // Modifying arr1 also affects arr2

console.log("arr1:", arr1); // Output: [1, 2, 3, 4]
console.log("arr2:", arr2); // Output: [1, 2, 3, 4]

// 3. Differences
console.log("\nDifferences:");

// Value types are stored in memory locations, while reference types store references to memory locations.
// Modifying a value type creates a new copy, while modifying a reference type affects all references pointing to the same object.

// 4. Pass by Value vs Pass by Reference
console.log("\nPass by Value vs Pass by Reference:");

// JavaScript passes value types by value (pass by value)
function updateNum(value) {
    value = 50; // Modifying value inside the function does not affect the original variable
}

let num = 30;
updateNum(num);
console.log("num after function call:", num); // Output: 30

// JavaScript passes reference types by reference (pass by reference)
function updateArray(array) {
    array.push(4); // Modifying array inside the function affects the original array
}

let numbers = [1, 2, 3];
updateArray(numbers);
console.log("numbers after function call:", numbers); // Output: [1, 2, 3, 4]

// 5. Use Cases
console.log("\nUse Cases:");

// Value types are useful when you want to create independent copies of data.
// Reference types are useful when you want to share and modify data across different parts of your code efficiently.
