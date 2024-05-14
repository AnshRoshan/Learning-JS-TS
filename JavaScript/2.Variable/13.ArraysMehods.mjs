// array_methods.mjs

// 1. Array Methods for Manipulation
console.log("1. Array Methods for Manipulation:");

// Creating an array
let numbers = [1, 2, 3, 4, 5];

// push(): Adds elements to the end of the array
numbers.push(6);
console.log("After push:", numbers); // Output: [1, 2, 3, 4, 5, 6]

// pop(): Removes the last element from the array
numbers.pop();
console.log("After pop:", numbers); // Output: [1, 2, 3, 4, 5]

// shift(): Removes the first element from the array
numbers.shift();
console.log("After shift:", numbers); // Output: [2, 3, 4, 5]

// unshift(): Adds elements to the beginning of the array
numbers.unshift(1);
console.log("After unshift:", numbers); // Output: [1, 2, 3, 4, 5]

// splice(): Adds or removes elements from any position in the array
numbers.splice(2, 0, 6, 7); // Inserting 6 and 7 at index 2
console.log("After splice (insert):", numbers); // Output: [1, 2, 6, 7, 3, 4, 5]

numbers.splice(3, 2); // Removing 2 elements starting from index 3
console.log("After splice (remove):", numbers); // Output: [1, 2, 6, 4, 5]

// slice(): Extracts a portion of the array into a new array
let slicedArray = numbers.slice(1, 4); // Extracting elements from index 1 to 3 (end index is exclusive)
console.log("Sliced Array:", slicedArray); // Output: [2, 6, 4]

// 2. Array Methods for Iteration
console.log("\n2. Array Methods for Iteration:");

// forEach(): Iterates over each element in the array
numbers.forEach(num => {
  console.log("forEach:", num);
});

// map(): Creates a new array with the results of calling a provided function on every element in the array
let doubledNumbers = numbers.map(num => num * 2);
console.log("Mapped Array:", doubledNumbers); // Output: [2, 4, 12, 8, 10]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function
let filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered Array (even numbers):", filteredNumbers); // Output: [2, 6, 4]

// find(): Returns the first element in the array that satisfies the provided testing function
let foundNumber = numbers.find(num => num > 4);
console.log("First number greater than 4:", foundNumber); // Output: 6

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum); // Output: 17 (1 + 2 + 6 + 4 + 5)

// 3. Other Array Methods
console.log("\n3. Other Array Methods:");

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = numbers.indexOf(4);
console.log("Index of 4:", index); // Output: 3

// includes(): Determines whether an array includes a certain element, returning true or false as appropriate
let includes = numbers.includes(5);
console.log("Includes 5:", includes); // Output: true

// join(): Joins all elements of an array into a string
let joinedString = numbers.join("-");
console.log("Joined String:", joinedString); // Output: "1-2-6-4-5"

// concat(): Combines two or more arrays
let otherNumbers = [7, 8, 9];
let combinedArray = numbers.concat(otherNumbers);
console.log("Combined Array:", combinedArray); // Output: [1, 2, 6, 4, 5, 7, 8, 9]

// isArray(): Determines whether the passed value is an array
let isArray = Array.isArray(numbers);
console.log("Is numbers an array?", isArray); // Output: true
