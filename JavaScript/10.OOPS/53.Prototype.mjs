// prototypes.mjs

// 1. Introduction to Prototypes
console.log("1. Introduction to Prototypes:");

// Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every JavaScript object has a prototype, which serves as a template for the object's properties and methods.

// 2. Creating Objects with Prototypes
console.log("\n2. Creating Objects with Prototypes:");

// You can create objects with prototypes using constructor functions or object literals.

// Example with constructor function:
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello, ${this.name}!`;
};

const person1 = new Person('John');
console.log("Greeting:", person1.greet()); // Output: Greeting: Hello, John!

// Example with object literal:
const animal = {
    type: 'Animal',
    sound: function () {
        return 'Unknown sound';
    }
};

const dog = Object.create(animal);
dog.type = 'Dog';
dog.sound = function () {
    return 'Woof!';
};

console.log("Dog Sound:", dog.sound()); // Output: Dog Sound: Woof!

// 3. Inheritance with Prototypes
console.log("\n3. Inheritance with Prototypes:");

// JavaScript objects inherit properties and methods from their prototypes. If a property or method is not found on an object, JavaScript looks up the prototype chain until it finds it.

// Example:
console.log("Type of Dog:", dog.type); // Output: Type of Dog: Dog
console.log("Animal Sound:", dog.sound()); // Output: Animal Sound: Woof!

// 4. Use Cases of Prototypes
console.log("\n4. Use Cases of Prototypes:");

// - Sharing behavior among multiple objects
// - Implementing inheritance and polymorphism
// - Adding methods or properties to built-in objects

// 5. Benefits of Prototypes
console.log("\n5. Benefits of Prototypes:");

// - Enables code reuse and sharing of behavior
// - Facilitates inheritance and polymorphism
// - Promotes a more efficient memory usage by sharing methods across objects

// Prototypes are a fundamental concept in JavaScript, enabling code reuse, inheritance, and polymorphism, which are essential for building complex applications.
