// objects.mjs

// 1. Creating Objects
console.log("Creating Objects:");

// Using object literal notation
const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["Reading", "Traveling", "Cooking"]
};

// Using Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

// 2. Accessing Properties
console.log("\nAccessing Properties:");

console.log("Person's name:", person.name); // Output: "John"
console.log("Car make:", car["make"]); // Output: "Toyota"
console.log("Person's city:", person.address.city); // Output: "New York"

// 3. Modifying Properties
console.log("\nModifying Properties:");

// Updating a property
person.age = 35;
console.log("Updated age:", person.age); // Output: 35

// Adding a new property
person.gender = "Male";
console.log("Added gender:", person.gender); // Output: "Male"

// 4. Deleting Properties
console.log("\nDeleting Properties:");

// Deleting a property
delete person.hobbies;
console.log("Deleted hobbies:", person.hobbies); // Output: undefined

// 5. Looping Over Objects
console.log("\nLooping Over Objects:");

// Using for...in loop
console.log("Person:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 6. Object Methods
console.log("\nObject Methods:");

// Object.keys() - Returns an array of keys
const carKeys = Object.keys(car);
console.log("Car keys:", carKeys); // Output: ["make", "model", "year"]

// Object.values() - Returns an array of values
const carValues = Object.values(car);
console.log("Car values:", carValues); // Output: ["Toyota", "Camry", 2020]

// Object.entries() - Returns an array of key-value pairs
const carEntries = Object.entries(car);
console.log("Car entries:", carEntries); // Output: [["make", "Toyota"], ["model", "Camry"], ["year", 2020]]
