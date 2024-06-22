// timing_functions.mjs

// 1. Introduction to Timing Functions
console.log('1. Introduction to Timing Functions:')

// JavaScript provides several timing functions for scheduling code execution:
// - setTimeout: Executes a function after a specified delay.
// - setInterval: Repeatedly executes a function at specified intervals.
// - clearTimeout: Cancels a timeout set by setTimeout.
// - clearInterval: Cancels an interval set by setInterval.

// 2. Example of setTimeout
console.log('\n2. Example of setTimeout:')

// setTimeout schedules a function to be executed once after a specified delay (in milliseconds).

const timeoutId = setTimeout(() => {
  console.log('This message is displayed after 2 seconds.')
}, 2000)

// 3. Example of clearTimeout
console.log('\n3. Example of clearTimeout:')

// clearTimeout cancels a timeout set by setTimeout.

clearTimeout(timeoutId) // Cancels the timeout, so the message will not be displayed.

// 4. Example of setInterval
console.log('\n4. Example of setInterval:')

// setInterval schedules a function to be executed repeatedly at specified intervals (in milliseconds).

const intervalId = setInterval(() => {
  console.log('This message is displayed every 1 second.')
}, 1000)

// 5. Example of clearInterval
console.log('\n5. Example of clearInterval:')

// clearInterval cancels an interval set by setInterval.

setTimeout(() => {
  clearInterval(intervalId) // Cancels the interval after 5 seconds.
  console.log('Interval cleared after 5 seconds.')
}, 5000)

// 6. Additional Examples
console.log('\n6. Additional Examples:')

// setTimeout with arguments
const greet = (name) => {
  console.log(`Hello, ${name}!`)
}

setTimeout(greet, 3000, 'Alice') // Output: Hello, Alice! (after 3 seconds)

// Recursive setTimeout for repeated execution (alternative to setInterval)
const recursiveTimeout = (count) => {
  if (count <= 0) return
  console.log(`Recursive timeout, count: ${count}`)
  setTimeout(() => recursiveTimeout(count - 1), 1000)
}

recursiveTimeout(5) // Output: Recursive timeout, count: 5, 4, 3, 2, 1 (each after 1 second)

// Combining setInterval with a counter to control execution
let counter = 5
const intervalCounterId = setInterval(() => {
  if (counter <= 0) {
    clearInterval(intervalCounterId)
    console.log('Counter interval cleared.')
  } else {
    console.log(`Counter: ${counter}`)
    counter--
  }
}, 1000)

// Explanation:
// - `setTimeout` schedules a single execution of a function after a specified delay.
// - `clearTimeout` cancels a timeout set by `setTimeout`.
// - `setInterval` schedules repeated execution of a function at specified intervals.
// - `clearInterval` cancels an interval set by `setInterval`.
// - `setTimeout` can take additional arguments to pass to the callback function.
// - Recursive `setTimeout` can be used as an alternative to `setInterval` for repeated execution with more control over timing.
// - Combining `setInterval` with a counter allows for controlled execution with termination conditions.
