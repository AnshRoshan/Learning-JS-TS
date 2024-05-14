// call_apply.mjs

// 1. Introduction to call() and apply()
console.log("1. Introduction to call() and apply():");

// The `call()` and `apply()` methods in JavaScript are used to call a function with a specified `this` value and arguments provided individually or as an array, respectively.

// 2. Basic Usage of call() and apply()
console.log("\n2. Basic Usage of call() and apply():");

// You can use `call()` and `apply()` to invoke functions with a specific `this` value and arguments.

// Example:
const person = {
    name: 'John',
    greet: function (greeting) {
        return `${greeting}, ${this.name}!`;
    }
};

const greeting = person.greet.call(person, 'Hello');
console.log("Greeting with call():", greeting); // Output: Greeting with call(): Hello, John!

const otherPerson = {
    name: 'Alice'
};

const greetingApply = person.greet.apply(otherPerson, ['Hi']);
console.log("Greeting with apply():", greetingApply); // Output: Greeting with apply(): Hi, Alice!

// 3. Use Cases of call() and apply()
console.log("\n3. Use Cases of call() and apply():");

// - Setting the `this` context for functions
// - Passing arguments individually or as an array

// Example:
// Setting the `this` context for functions
const greetOtherPerson = person.greet.call(otherPerson, 'Hey');
console.log("Greeting for other person:", greetOtherPerson); // Output: Greeting for other person: Hey, Alice!

// Passing arguments individually or as an array
const argumentsArray = ['Bonjour'];
const greetingWithApply = person.greet.apply(otherPerson, argumentsArray);
console.log("Greeting with apply() and arguments array:", greetingWithApply); // Output: Greeting with apply() and arguments array: Bonjour, Alice!

// 4. Benefits of call() and apply()
console.log("\n4. Benefits of call() and apply():");

// - Provides flexibility in setting the `this` context for functions
// - Allows passing arguments individually or as an array

// The `call()` and `apply()` methods in JavaScript offer flexibility in setting the `this` context for functions and passing arguments, enhancing code reusability and readability.
