// enhanced_object_literals.mjs

// 1. Introduction to Enhanced Object Literals
console.log("1. Introduction to Enhanced Object Literals:");

// Enhanced Object Literals is a feature introduced in ES6 (ECMAScript 2015) that enhances the syntax for defining object literals in JavaScript. It provides shorthand syntax for common tasks and allows for more concise and readable code.

// 2. Shorthand Property Names
console.log("\n2. Shorthand Property Names:");

// Enhanced Object Literals allow you to omit the property name if it matches the variable name being assigned as the property value.

// Example:
const name = "John";
const age = 30;

// Without Enhanced Object Literals
const person1 = {
    name: name,
    age: age
};

// With Enhanced Object Literals
const person2 = {
    name,
    age
};

console.log("Person 1:", person1);
console.log("Person 2:", person2);

// 3. Computed Property Names
console.log("\n3. Computed Property Names:");

// Enhanced Object Literals allow you to use expressions within square brackets [] to compute property names dynamically.

// Example:
const dynamicKey = "language";

// Without Enhanced Object Literals
const settings1 = {};
settings1[dynamicKey] = "JavaScript";

key = 11
// With Enhanced Object Literals
const settings2 = {
    [dynamicKey]: "JavaScript",
    [`moredynamic-${key}`]: "typescript"
};

console.log("Settings 1:", settings1);
console.log("Settings 2:", settings2);

// 4. Method Definitions
console.log("\n4. Method Definitions:");

// Enhanced Object Literals allow you to define methods using shorthand syntax within object literals.

// Example:
// Without Enhanced Object Literals
const object1 = {
    method: function () {
        console.log("Method 1");
    }
};

// With Enhanced Object Literals
const object2 = {
    method() {
        console.log("Method 2");
    }
};

object1.method();
object2.method();

// 5. Use Cases of Enhanced Object Literals
console.log("\n5. Use Cases of Enhanced Object Literals:");

// - Creating objects with concise syntax
// - Dynamically generating object properties
// - Defining object methods more succinctly

// Example:
// Dynamically generating object properties
const key = "value";
const obj = {
    [key]: 123
};

console.log("Dynamic Object:", obj); // Output: { value: 123 }

// Enhanced Object Literals offer a more concise and expressive way to define object literals in JavaScript, improving code readability and reducing verbosity.
