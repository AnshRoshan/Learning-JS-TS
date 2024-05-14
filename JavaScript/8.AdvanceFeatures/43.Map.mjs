// map.mjs

// 1. Introduction to Map
console.log("1. Introduction to Map:");

// Map is a built-in data structure introduced in ES6 (ECMAScript 2015) in JavaScript. It allows you to store key-value pairs and is iterable, meaning you can loop through its elements.

// 2. Creating a Map
console.log("\n2. Creating a Map:");

// You can create a Map using the Map constructor or by using the Map literal syntax.

// Example:
// Using the Map constructor
const myMap = new Map();

// Using the Map literal syntax
const myOtherMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

// 3. Adding and Retrieving Elements
console.log("\n3. Adding and Retrieving Elements:");

// You can add key-value pairs to a Map using the set() method, and retrieve values using the get() method.

// Example:
myMap.set('name', 'John');
myMap.set('age', 30);

console.log("Name:", myMap.get('name')); // Output: Name: John
console.log("Age:", myMap.get('age'));   // Output: Age: 30

// 4. Iterating over a Map
console.log("\n4. Iterating over a Map:");

// You can iterate over the key-value pairs of a Map using for...of loop, forEach() method, or entries() method.

// Example:
// Using for...of loop
for (const [key, value] of myMap) {
    console.log(key, value);
}

// Using forEach() method
myMap.forEach((value, key) => {
    console.log(key, value);
});

// Using entries() method
for (const entry of myMap.entries()) {
    console.log(entry[0], entry[1]);
}

// 5. Checking Map Size
console.log("\n5. Checking Map Size:");

// You can get the size of a Map (the number of key-value pairs it contains) using the size property.

// Example:
console.log("Map Size:", myMap.size);

// 6. Deleting Elements
console.log("\n6. Deleting Elements:");

// You can delete key-value pairs from a Map using the delete() method.

// Example:
myMap.delete('age');

console.log("Map Size:", myMap.size); // Output: Map Size: 1

// 7. Use Cases of Map
console.log("\n7. Use Cases of Map:");

// - Storing and retrieving data with associated keys
// - Maintaining the insertion order of elements
// - Working with collections of unique keys

// Example:
// Storing user data with associated keys
const userData = new Map([
    ['name', 'John'],
    ['age', 30],
    ['email', 'john@example.com']
]);

// Working with collections of unique keys
const uniqueKeys = new Set([1, 2, 3, 3, 4]);
const mapWithUniqueKeys = new Map();

uniqueKeys.forEach(key => {
    mapWithUniqueKeys.set(key, key * 2);
});

console.log("Map with Unique Keys:", mapWithUniqueKeys);

// Map is a versatile data structure in JavaScript that provides efficient key-value storage and retrieval, making it suitable for a wide range of use cases in JavaScript applications.
