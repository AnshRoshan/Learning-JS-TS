// generators_and_iterators.mjs

// 1. Introduction to Generators and Iterators
console.log("1. Introduction to Generators and Iterators:");

// Generators and Iterators are features introduced in ES6 (ECMAScript 2015) in JavaScript. They provide a powerful mechanism for creating iterable objects and generating sequences of values lazily.

// 2. Iterables and Iterators
console.log("\n2. Iterables and Iterators:");

// An iterable is an object that implements the Iterable interface, meaning it has a method named Symbol.iterator that returns an iterator. An iterator is an object that implements the Iterator interface, meaning it has a next() method that returns an object with properties { value, done }.

// Example:
const iterableObject = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

const iterator = iterableObject[Symbol.iterator]();

console.log("First value:", iterator.next().value); // Output: First value: 1
console.log("Second value:", iterator.next().value); // Output: Second value: 2
console.log("Third value:", iterator.next().value); // Output: Third value: 3

// 3. Generators
console.log("\n3. Generators:");

// Generators are functions that can be paused and resumed during execution, allowing for the generation of a sequence of values lazily. They are defined using the function* syntax and yield keyword.

// Example:
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();

console.log("Generated values:");
for (const value of generator) {
    console.log(value);
}

// 4. Use Cases of Generators and Iterators
console.log("\n4. Use Cases of Generators and Iterators:");

// - Lazy evaluation of sequences
// - Implementing custom iteration behavior
// - Asynchronous programming with async generators

// Example:
// Lazy evaluation of sequences
function* fibonacci() {
    let prev = 0;
    let curr = 1;

    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibonacciSequence = fibonacci();
console.log("Fibonacci Sequence:");
for (let i = 0; i < 5; i++) {
    console.log(fibonacciSequence.next().value);
}

// Generators and Iterators provide a flexible and efficient way to work with sequences of values in JavaScript, enabling lazy evaluation and custom iteration behavior in applications.
