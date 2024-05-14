// loops.mjs

// 1. Introduction to Loops
console.log("1. Introduction to Loops:");

// Loops are control flow structures that allow you to execute a block of code repeatedly until a certain condition is met.

// 2. The for Loop
console.log("\n2. The for Loop:");

// The for loop is one of the most commonly used loops in JavaScript. It iterates over a block of code a specified number of times.

// Syntax: for (initialization; condition; iteration) { // code block to be executed }

// Example:
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}

// In this example, the loop runs 5 times, with 'i' ranging from 0 to 4.

// 3. The while Loop
console.log("\n3. The while Loop:");

// The while loop repeatedly executes a block of code as long as a specified condition is true.

// Syntax: while (condition) { // code block to be executed }

// Example:
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

// This while loop will execute 3 times, incrementing 'count' from 0 to 2.

// 4. The do-while Loop
console.log("\n4. The do-while Loop:");

// The do-while loop is similar to the while loop, but it guarantees that the block of code is executed at least once before checking the condition.

// Syntax: do { // code block to be executed } while (condition);

// Example:
let x = 5;
do {
    console.log("x:", x);
    x--;
} while (x > 0);

// In this example, the do-while loop will execute 5 times, decrementing 'x' from 5 to 1.

// 5. The for...of Loop
console.log("\n5. The for...of Loop:");

// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.

// Syntax: for (variable of iterable) { // code block to be executed }

// Example:
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// This for...of loop iterates over each element in the 'fruits' array, logging each fruit to the console.

// 6. Differences and Use Cases
console.log("\n6. Differences and Use Cases:");

// - Use the for loop when you know the number of iterations in advance or need to control the iteration steps explicitly.
// - Use the while loop when you want to iterate based on a condition that may change during runtime.
// - Use the do-while loop when you need to execute the code block at least once before checking the condition.
// - Use the for...of loop when iterating over iterable objects without needing the index.

// Example:
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}

// while loop
let condition = true;
while (condition) {
    // code block
    condition = false; // change condition to exit loop
}

// do-while loop
let y = 10;
do {
    console.log("y:", y);
    y--;
} while (y > 0);

// for...of loop
const animals = ["cat", "dog", "rabbit"];
for (const animal of animals) {
    console.log("Animal:", animal);
}

// Each type of loop has its own specific use cases and advantages, so choose the one that best fits your requirements and improves code readability.
