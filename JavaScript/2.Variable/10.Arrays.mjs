// arrays.mjs

// 1. Creating Arrays
console.log("Creating Arrays:");

// Using array literal notation
const fruits = ["Apple", "Banana", "Orange"];

// Using Array constructor
const colors = new Array("Red", "Green", "Blue");

// 2. Accessing Elements
console.log("\nAccessing Elements:");

console.log("First fruit:", fruits[0]); // Output: "Apple"
console.log("Second color:", colors[1]); // Output: "Green"

// 3. Modifying Elements
console.log("\nModifying Elements:");

// Updating an element
fruits[0] = "Mango";
console.log("Updated first fruit:", fruits[0]); // Output: "Mango"

// Adding elements to the end
fruits.push("Grapes");
console.log("Fruits after push:", fruits); // Output: ["Mango", "Banana", "Orange", "Grapes"]

// Removing elements from the end
const removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit); // Output: "Grapes"
console.log("Fruits after pop:", fruits); // Output: ["Mango", "Banana", "Orange"]

// 4. Iterating Over Arrays
console.log("\nIterating Over Arrays:");

// Using for loop
console.log("Fruits using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
console.log("Colors using forEach:");
colors.forEach(color => {
    console.log(color);
});

// 5. Array Methods
console.log("\nArray Methods:");

// Joining elements into a string
const fruitString = fruits.join(", ");
console.log("Fruits as a string:", fruitString); // Output: "Mango, Banana, Orange"

// Reversing elements
const reversedColors = colors.reverse();
console.log("Reversed colors:", reversedColors); // Output: ["Blue", "Green", "Red"]

// Slicing elements
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits); // Output: ["Banana", "Orange"]

// 6. Multidimensional Arrays
console.log("\nMultidimensional Arrays:");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Element at (1, 1):", matrix[1][1]); // Output: 5
