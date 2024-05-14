// sets.mjs

// 1. Introduction to Sets
console.log("1. Introduction to Sets:");

// Sets are a built-in data structure introduced in ES6 (ECMAScript 2015) in JavaScript. They allow you to store unique values of any type, whether primitive values or object references.

// 2. Creating a Set
console.log("\n2. Creating a Set:");

// You can create a Set using the Set constructor or by using the Set literal syntax.

// Example:
// Using the Set constructor
const mySet = new Set();

// Using the Set literal syntax
const myOtherSet = new Set([1, 2, 3, 4, 5]);

// 3. Adding and Retrieving Elements
console.log("\n3. Adding and Retrieving Elements:");

// You can add elements to a Set using the add() method, and retrieve values using the forEach() method or the entries() method.

// Example:
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log("Set:", mySet);

// 4. Checking Set Size
console.log("\n4. Checking Set Size:");

// You can get the size of a Set (the number of unique values it contains) using the size property.

// Example:
console.log("Set Size:", mySet.size);

// 5. Checking Set Membership
console.log("\n5. Checking Set Membership:");

// You can check if a value is present in a Set using the has() method.

// Example:
console.log("Has 2:", mySet.has(2));   // Output: Has 2: true
console.log("Has 4:", mySet.has(4));   // Output: Has 4: false

// 6. Deleting Elements
console.log("\n6. Deleting Elements:");

// You can delete elements from a Set using the delete() method.

// Example:
mySet.delete(2);

console.log("Set Size:", mySet.size); // Output: Set Size: 2

// 7. Iterating over a Set
console.log("\n7. Iterating over a Set:");

// You can iterate over the elements of a Set using the forEach() method or the entries() method.

// Example:
mySet.forEach(value => {
    console.log("Value:", value);
});

// 8. Converting Set to Array
console.log("\n8. Converting Set to Array:");

// You can convert a Set to an array using the spread operator (...) or the Array.from() method.

// Example:
const arrayFromSet = [...mySet];
console.log("Array from Set:", arrayFromSet);

// Set use cases:
console.log("\nSet use cases:");

// - Removing duplicate values from arrays
// - Checking for existence of unique elements
// - Storing unique values in collections

// Example:
// Removing duplicate values from arrays
const arrayWithDuplicates = [1, 2, 3, 1, 2, 4, 5];
const uniqueValues = new Set(arrayWithDuplicates);
const arrayWithoutDuplicates = [...uniqueValues];

console.log("Array without Duplicates:", arrayWithoutDuplicates);

// Sets provide a simple and efficient way to manage collections of unique values in JavaScript, making them useful for various tasks such as removing duplicates from arrays or checking for the existence of unique elements.
