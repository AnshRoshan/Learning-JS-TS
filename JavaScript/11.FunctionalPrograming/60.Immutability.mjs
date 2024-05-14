// immutability.mjs

// 1. Introduction to Immutability
console.log("1. Introduction to Immutability:");

// Immutability is the concept of maintaining the state of data without allowing it to be modified after it's created. In JavaScript, immutability is important for writing predictable, maintainable, and bug-free code.

// 2. Immutability with Primitive Values
console.log("\n2. Immutability with Primitive Values:");

// Primitive values (such as numbers, strings, and booleans) are immutable by nature because their values cannot be changed once they're created.

let x = 5;
let y = x; // y is a copy of x
x = 10;

console.log("x:", x); // Output: x: 10
console.log("y:", y); // Output: y: 5

// Modifying x doesn't affect the value of y because primitive values are immutable.

// 3. Immutability with Objects
console.log("\n3. Immutability with Objects:");

// Objects in JavaScript are mutable by default, meaning their properties can be modified after they're created. To achieve immutability with objects, you need to ensure that the object and its nested objects are not modified.

// Example of creating an immutable object:
const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// To make the person object completely immutable, including nested objects, you can use techniques such as Object.freeze and recursion.

// Using Object.freeze for shallow immutability:
const immutablePerson = Object.freeze(person);

// Attempting to modify immutablePerson or its properties will result in an error in strict mode or be ignored in non-strict mode.

// 4. Making Nested Objects Immutable
console.log("\n4. Making Nested Objects Immutable:");

// To make nested objects immutable, you need to recursively apply Object.freeze to each nested object.

function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    });
    return Object.freeze(obj);
}

const deeplyImmutablePerson = deepFreeze(person);

// Now, deeplyImmutablePerson and its nested objects are completely immutable.

// 5. Benefits of Immutability
console.log("\n5. Benefits of Immutability:");

// - Predictability: Immutable data structures lead to predictable code behavior, making it easier to understand, debug, and maintain.
// - Concurrency: Immutability facilitates concurrency by eliminating the need for locking mechanisms and reducing the risk of race conditions.
// - Performance: Immutable data structures can be optimized for memory usage and performance, especially in scenarios involving large data sets or frequent updates.

// Immutability is a powerful concept that promotes stability, predictability, and maintainability in JavaScript applications.
