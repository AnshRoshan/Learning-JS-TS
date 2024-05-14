// symbols.mjs

// 1. Introduction to Symbols
console.log("1. Introduction to Symbols:");

// Symbols are a primitive data type introduced in ES6 (ECMAScript 2015) in JavaScript. They are unique and immutable values that can be used as property keys for object properties.

// 2. Creating Symbols
console.log("\n2. Creating Symbols:");

// You can create a Symbol using the Symbol constructor or the Symbol factory function.

// Example:
// Using the Symbol constructor
const mySymbol = Symbol();

// Using the Symbol factory function with a description
const myOtherSymbol = Symbol('description');

// 3. Unique Identifiers
console.log("\n3. Unique Identifiers:");

// Symbols are guaranteed to be unique, even if they have the same description.

// Example:
const symbol1 = Symbol('key');
const symbol2 = Symbol('key');

console.log("Symbol 1:", symbol1); // Output: Symbol 1: Symbol(key)
console.log("Symbol 2:", symbol2); // Output: Symbol 2: Symbol(key)

console.log("Are symbols equal?", symbol1 === symbol2); // Output: Are symbols equal? false

// 4. Using Symbols as Object Properties
console.log("\n4. Using Symbols as Object Properties:");

// Symbols can be used as keys for object properties, allowing for the creation of non-enumerable properties that won't appear in iterations.

// Example:
const myObject = {};

const mySymbol1 = Symbol('mySymbol');
myObject[mySymbol1] = 'value';

console.log("Object with Symbol Property:", myObject);

// 5. Symbol Registry
console.log("\n5. Symbol Registry:");

// Symbols can be added to the global symbol registry using the Symbol.for() method, allowing for the creation of shared symbols.

// Example:
const sharedSymbol1 = Symbol.for('shared');
const sharedSymbol2 = Symbol.for('shared');

console.log("Are symbols shared?", sharedSymbol1 === sharedSymbol2); // Output: Are symbols shared? true

// 6. Well-known Symbols
console.log("\n6. Well-known Symbols:");

// JavaScript provides several built-in symbols known as well-known symbols, which are used for special behaviors such as defining custom iterator behavior or implementing built-in behaviors like toString().

// Example:
const toStringSymbol = Symbol.toStringTag;

const customObject = {
    [toStringSymbol]: 'Custom Object'
};

console.log("Custom Object:", customObject.toString());

// 7. Use Cases of Symbols
console.log("\n7. Use Cases of Symbols:");

// - Creating unique keys for object properties
// - Defining non-enumerable properties
// - Implementing custom iterator behavior
// - Implementing built-in behaviors using well-known symbols

// Example:
// Creating unique keys for object properties
const uniqueKey = Symbol();

const user = {
    [uniqueKey]: 'uniqueValue'
};

console.log("User Object:", user[uniqueKey]);

// Symbols provide a powerful mechanism for creating unique identifiers and defining non-enumerable properties in JavaScript, enabling advanced patterns and behaviors in applications.



// hidden_symbols.mjs

// 1. Introduction to Hidden Nature of Symbols
console.log("1. Introduction to Hidden Nature of Symbols:");

// Symbols in JavaScript have a hidden nature, meaning they are not easily accessible through regular object property access and enumeration. This property makes them useful for creating unique identifiers that won't interfere with other properties.

// 2. Creating Hidden Symbols
console.log("\n2. Creating Hidden Symbols:");

// You can create hidden Symbols by using the Symbol constructor and assigning them as properties of objects.

// Example:
const myObject = {};

const hiddenSymbol = Symbol('hiddenSymbol');
myObject[hiddenSymbol] = 'hidden value';

console.log("Hidden Symbol:", myObject[hiddenSymbol]);

// 3. Accessing Hidden Symbols
console.log("\n3. Accessing Hidden Symbols:");

// Hidden Symbols are not accessible through regular property access or enumeration. You can access them using methods like Object.getOwnPropertySymbols() or Object.getOwnPropertyNames().

// Example:
const symbols = Object.getOwnPropertySymbols(myObject);

console.log("Symbols:", symbols);
console.log("Value of Hidden Symbol:", myObject[symbols[0]]);

// 4. Use Cases of Hidden Symbols
console.log("\n4. Use Cases of Hidden Symbols:");

// - Creating private or internal properties
// - Avoiding conflicts with other properties
// - Implementing internal functionality without exposing it

// Example:
// Creating private or internal properties
const privateData = Symbol('privateData');

class MyClass {
    constructor() {
        this[privateData] = 'private value';
    }

    getPrivateData() {
        return this[privateData];
    }
}

const instance = new MyClass();
console.log("Private Data:", instance.getPrivateData());

// Hidden Symbols provide a way to create private or internal properties in JavaScript, enabling encapsulation and reducing the risk of unintended interference with other properties in objects.
