// promises.mjs

// 1. Introduction to Promises
console.log("1. Introduction to Promises:");

// Promises are a powerful feature in JavaScript for handling asynchronous operations. They represent a value that may be available now, in the future, or never.

// 2. Creating a Promise
console.log("\n2. Creating a Promise:");

// Promises are created using the Promise constructor, which takes a single executor function as its argument.

// Syntax: new Promise(executor);

// Example:
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error("Random number is less than 0.5"));
        }
    }, 2000);
});

// 3. Consuming a Promise
console.log("\n3. Consuming a Promise:");

// Promises can be consumed using the then() and catch() methods, which are called on the Promise object.

// Example:
myPromise
    .then((result) => {
        console.log("Resolved:", result);
    })
    .catch((error) => {
        console.error("Rejected:", error.message);
    });

// In this example, the then() method handles the resolved state of the Promise, while the catch() method handles the rejected state.

// 4. Chaining Promises
console.log("\n4. Chaining Promises:");

// Promises can be chained together using the then() method to perform sequential asynchronous operations.

// Example:
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First");
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second");
    }, 2000);
});

promise1
    .then((result) => {
        console.log("Result 1:", result);
        return promise2;
    })
    .then((result) => {
        console.log("Result 2:", result);
    });

// This example demonstrates chaining two promises together to perform sequential asynchronous operations.

// 5. Promise.all() Method
console.log("\n5. Promise.all() Method:");

// The Promise.all() method takes an array of promises as input and returns a single Promise that resolves when all input promises have resolved, or rejects if any of the input promises reject.

// Example:
const promise3 = Promise.resolve("One");
const promise4 = Promise.resolve("Two");
const promise5 = Promise.resolve("Three");

Promise.all([promise3, promise4, promise5])
    .then((results) => {
        console.log("All Promises Resolved:", results);
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });

// This example demonstrates using Promise.all() to handle multiple promises concurrently and wait for all of them to resolve.

// 6. Benefits and Use Cases
console.log("\n6. Benefits and Use Cases:");

// - Promises provide a cleaner and more intuitive way to handle asynchronous operations compared to callbacks.
// - They support error handling through the catch() method, making it easier to manage and propagate errors.
// - Promises can be chained together to perform sequential asynchronous operations or handle dependencies between multiple asynchronous tasks.

// Promises are widely used in modern JavaScript development for tasks such as AJAX requests, asynchronous data fetching, and more.

