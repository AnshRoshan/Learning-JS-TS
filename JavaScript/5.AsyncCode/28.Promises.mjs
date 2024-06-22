// promises.mjs

// 1. Introduction to Promises
console.log('1. Introduction to Promises:')

// Promises are a powerful feature in JavaScript for handling asynchronous operations. They represent a value that may be available now, in the future, or never.

// 2. Creating a Promise
console.log('\n2. Creating a Promise:')

// Promises are created using the Promise constructor, which takes a single executor function as its argument.

// Syntax: new Promise(executor);

// Example:
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random()
    if (randomNumber > 0.5) {
      resolve(randomNumber)
    } else {
      reject(new Error('Random number is less than 0.5'))
    }
  }, 2000)
})

// 3. Consuming a Promise
console.log('\n3. Consuming a Promise:')

// Promises can be consumed using the then() and catch() methods, which are called on the Promise object.

// Example:
myPromise
  .then((result) => {
    console.log('Resolved:', result)
  })
  .catch((error) => {
    console.error('Rejected:', error.message)
  })

// In this example, the then() method handles the resolved state of the Promise, while the catch() method handles the rejected state.

// 4. Chaining Promises
console.log('\n4. Chaining Promises:')

// Promises can be chained together using the then() method to perform sequential asynchronous operations.

// Example:
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('First from Promise 1')
  }, 1000)
})

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Second from Promise 2')
  }, 2000)
})

promise1
  .then((result) => {
    console.log('Result 1:', result)
    return promise2
  })
  .then((result) => {
    console.log('Result 2:', result)
  })

// This example demonstrates chaining two promises together to perform sequential asynchronous operations.

// 5. Promise.all() Method
console.log('\n5. Promise.all() Method:')

// The Promise.all() method takes an array of promises as input and returns a single Promise that resolves when all input promises have resolved, or rejects if any of the input promises reject.

// Example:
const promise3 = Promise.resolve('One')
const promise4 = Promise.resolve('Two')
const promise5 = Promise.resolve('Three')

Promise.all([promise3, promise4, promise5])
  .then((results) => {
    console.log('All Promises Resolved:', results)
  })
  .catch((error) => {
    console.error('At least one promise rejected:', error)
  })

// This example demonstrates using Promise.all() to handle multiple promises concurrently and wait for all of them to resolve.

// 6. Benefits and Use Cases
console.log('\n6. Benefits and Use Cases:')

// - Promises provide a cleaner and more intuitive way to handle asynchronous operations compared to callbacks.
// - They support error handling through the catch() method, making it easier to manage and propagate errors.
// - Promises can be chained together to perform sequential asynchronous operations or handle dependencies between multiple asynchronous tasks.

// Promises are widely used in modern JavaScript development for tasks such as AJAX requests, asynchronous data fetching, and more.

// promise_methods.mjs

// 1. Introduction to Promise Methods
console.log('1. Introduction to Promise Methods:')

// JavaScript provides several methods for working with multiple promises:
// - Promise.all: Waits for all promises to fulfill or any to reject.
// - Promise.allSettled: Waits for all promises to settle (fulfill or reject).
// - Promise.race: Waits for the first promise to settle (fulfill or reject).
// - Promise.any: Waits for the first promise to fulfill (ignores rejections).

// 2. Example of Promise.all
console.log('\n2. Example of Promise.all:')

const allpromise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1 resolved'))
const allpromise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'))
const allpromise3 = new Promise((resolve, reject) => setTimeout(reject, 3000, 'Promise 3 rejected'))

Promise.all([allpromise1, allpromise2, allpromise3])
  .then((values) => {
    console.log('Promise.all resolved with values:', values)
  })
  .catch((error) => {
    console.log('Promise.all rejected with error:', error)
  })

// Output: Promise.all rejected with error: Promise 3 rejected

// 3. Example of Promise.allSettled
console.log('\n3. Example of Promise.allSettled:')

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log('Promise.allSettled results:', results)
})

// Output:
// Promise.allSettled results: [
//   { status: 'fulfilled', value: 'Promise 1 resolved' },
//   { status: 'fulfilled', value: 'Promise 2 resolved' },
//   { status: 'rejected', reason: 'Promise 3 rejected' }
// ]

// 4. Example of Promise.race
console.log('\n4. Example of Promise.race:')

const racePromise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Race 1 resolved'))
const racePromise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Race 2 resolved'))
const racePromise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Race 3 resolved'))

Promise.race([racePromise1, racePromise2, racePromise3])
  .then((value) => {
    console.log('Promise.race resolved with value:', value)
  })
  .catch((error) => {
    console.log('Promise.race rejected with error:', error)
  })

// Output: Promise.race resolved with value: Race 1 resolved

// 5. Example of Promise.any
console.log('\n5. Example of Promise.any:')

const anyPromise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Any 1 rejected'))
const anyPromise2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Any 2 rejected'))
const anyPromise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Any 3 resolved'))

Promise.any([anyPromise1, anyPromise2, anyPromise3])
  .then((value) => {
    console.log('Promise.any resolved with value:', value)
  })
  .catch((error) => {
    console.log('Promise.any rejected with error:', error)
  })

// Output: Promise.any resolved with value: Any 3 resolved

// Explanation:
// - `Promise.all` waits for all promises to fulfill or any to reject. It resolves with an array of values if all promises fulfill, and rejects with the reason of the first rejected promise.
// - `Promise.allSettled` waits for all promises to settle (fulfill or reject). It resolves with an array of results, each being an object with `status` and `value` (or `reason` if rejected).
// - `Promise.race` waits for the first promise to settle (fulfill or reject). It resolves or rejects with the value or reason of the first settled promise.
// - `Promise.any` waits for the first promise to fulfill, ignoring rejections. It resolves with the value of the first fulfilled promise, and rejects with an `AggregateError` if all promises are rejected.
