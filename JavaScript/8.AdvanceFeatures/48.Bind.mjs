// bind.mjs

// 1. Introduction to bind()
console.log("1. Introduction to bind():");

// The `bind()` method in JavaScript creates a new function that, when called, has its `this` keyword set to a specific value, provided as an argument to `bind()`.

// 2. Basic Usage of bind()
console.log("\n2. Basic Usage of bind():");

// You can use `bind()` to create a new function with a fixed `this` value.

// Example:
const person = {
    name: 'John',
    greet: function () {
        return `Hello, ${this.name}!`;
    }
};

const greetJohn = person.greet.bind(person);

console.log("Greeting:", greetJohn()); // Output: Greeting: Hello, John!

// 3. Presetting Arguments with bind()
console.log("\n3. Presetting Arguments with bind():");

// You can also use `bind()` to preset arguments to a function.

// Example:
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const greetJohnExcited = greet.bind(person, 'Hi', '!');

console.log("Greeting with Exclamation:", greetJohnExcited()); // Output: Greeting with Exclamation: Hi, John!

// 4. Use Cases of bind()
console.log("\n4. Use Cases of bind():");

// - Setting the `this` context for methods in objects
// - Presetting arguments for functions
// - Creating new functions with fixed `this` values

// Example:
// Setting the `this` context for methods in objects
const otherPerson = {
    name: 'Alice'
};

const greetAlice = person.greet.bind(otherPerson);

console.log("Greeting for Alice:", greetAlice()); // Output: Greeting for Alice: Hello, Alice!

// Presetting arguments for functions
const greetExclamation = greet.bind(person, 'Hello', '!');

console.log("Greeting with Exclamation:", greetExclamation()); // Output: Greeting with Exclamation: Hello, John!

// 5. Benefits of bind()
console.log("\n5. Benefits of bind():");

// - Provides control over the `this` context
// - Enables code reusability by creating new functions with fixed `this` values

// The `bind()` method in JavaScript is a powerful tool for controlling the `this` context and creating new functions with preset arguments, enhancing code maintainability and flexibility.
