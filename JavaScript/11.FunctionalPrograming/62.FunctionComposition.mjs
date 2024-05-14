// function_composition.mjs

// 1. Introduction to Function Composition
console.log("1. Introduction to Function Composition:");

// Function composition is the process of combining multiple functions to create a new function. It allows you to build complex behaviors by chaining together smaller, reusable functions.

// 2. Example of Function Composition with compose
console.log("\n2. Example of Function Composition with compose:");

// Example:
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// Functions for transformation
const add = x => x + 10;
const multiply = x => x * 2;
const subtract = x => x - 5;

// Compose functions to create a new function
const composedFunction = compose(subtract, multiply, add);

console.log("Result of composed function:", composedFunction(5)); // Output: Result of composed function: 25

// The composed function applies the add, multiply, and subtract functions in sequence to the input value (5), resulting in the final output of 25.

// 3. Example of Function Composition with flow
console.log("\n3. Example of Function Composition with flow:");

// Example:
const flow = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// Compose functions to create a new function
const flowFunction = flow(add, multiply, subtract);

console.log("Result of flow function:", flowFunction(5)); // Output: Result of flow function: 25

// The flow function applies the add, multiply, and subtract functions in sequence to the input value (5), resulting in the final output of 25.

// 4. Example of GroupBy
console.log("\n4. Example of GroupBy:");

// Example:
const groupBy = (arr, keyFn) =>
  arr.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});

// Example data
const students = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Eve", age: 30 }
];

// Group students by age
const groupedStudents = groupBy(students, student => student.age);

console.log("Grouped students:", groupedStudents);
/*
Output:
Grouped students: {
  '25': [ { name: 'John', age: 25 }, { name: 'Bob', age: 25 } ],
  '30': [ { name: 'Alice', age: 30 }, { name: 'Eve', age: 30 } ]
}
*/

// The groupBy function groups the students array based on the age of each student, creating an object where keys represent ages and values represent arrays of students with the same age.

// Function composition and groupBy are powerful techniques for building modular, reusable, and maintainable code in JavaScript.
