// destructuring.mjs

// 1. Introduction to Destructuring
console.log("1. Introduction to Destructuring:");

// Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way.

// 2. Array Destructuring
console.log("\n2. Array Destructuring:");

// Array destructuring allows you to extract values from arrays and assign them to variables using syntax that resembles array literals.

// Example:
const numbers = [1, 2, 3, 4, 5];

// Extracting values from the array
const [first, second, , fourth] = numbers;

console.log("First:", first);   // Output: 1
console.log("Second:", second); // Output: 2
console.log("Fourth:", fourth); // Output: 4

// 3. Object Destructuring
console.log("\n3. Object Destructuring:");

// Object destructuring allows you to extract values from objects and assign them to variables using syntax that resembles object literals.

// Example:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Extracting values from the object
const { name, age, city } = person;

console.log("Name:", name);   // Output: John
console.log("Age:", age);     // Output: 30
console.log("City:", city);   // Output: New York

// 4. Default Values and Aliases
console.log("\n4. Default Values and Aliases:");

// You can provide default values and assign aliases while destructuring to handle cases where the value is undefined or to rename variables.

// Example:
const { firstName = "Anonymous", lastName: surname } = { lastName: "Doe" };

console.log("First Name:", firstName); // Output: Anonymous (default value)
console.log("Surname:", surname);      // Output: Doe (renamed variable)

// 5. Nested Destructuring
console.log("\n5. Nested Destructuring:");

// Destructuring can be nested to extract values from nested arrays or objects.

// Example:
const data = {
    user: {
        name: "Alice",
        age: 25,
        address: {
            city: "London",
            country: "UK"
        }
    }
};

const { user: { name: userName1, address: { city: userCity } } } = data;

console.log("User Name:", userName1); // Output: Alice
console.log("User City:", userCity); // Output: London

// 6. Uses of Destructuring
console.log("\n6. Uses of Destructuring:");

// - Assigning variables from function returns
// - Simplifying access to object properties
// - Extracting values from arrays or objects in function parameters

// Example:
// Assigning variables from function returns
function getUser() {
    return { name: "Bob", age: 35 };
}

const { name: userName, age: userAge } = getUser();

console.log("User Name:", userName); // Output: Bob
console.log("User Age:", userAge);   // Output: 35

// Simplifying access to object properties
const settings = {
    theme: "dark",
    language: "en"
};

function applySettings({ theme, language }) {
    console.log("Applying theme:", theme);
    console.log("Applying language:", language);
}

applySettings(settings);

// Destructuring offers a more concise and expressive way to work with arrays and objects in JavaScript, leading to cleaner and more readable code.
