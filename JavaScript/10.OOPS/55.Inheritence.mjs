// class_inheritance.mjs

// 1. Introduction to Class Inheritance
console.log("1. Introduction to Class Inheritance:");

// Class inheritance is the process by which one class can inherit properties and methods from another class. It enables code reuse and promotes a hierarchical structure in object-oriented programming.

// 2. Creating Base Class
console.log("\n2. Creating Base Class:");

// You can define a base class (also known as a superclass or parent class) with properties and methods that are shared among multiple subclasses.

// Example:
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        return 'Unknown sound';
    }
}

// 3. Creating Subclasses
console.log("\n3. Creating Subclasses:");

// Subclasses (also known as derived classes or child classes) inherit properties and methods from their parent class and can also have their own properties and methods.

// Example:
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    sound() {
        return 'Woof!';
    }

    fetch() {
        return `${this.name} is fetching...`;
    }
}

// 4. Using Inheritance
console.log("\n4. Using Inheritance:");

// Instances of subclasses inherit properties and methods from both their subclass and superclass.

// Example:
const dog = new Dog('Buddy', 'Golden Retriever');
console.log("Dog Name:", dog.name); // Output: Dog Name: Buddy
console.log("Dog Breed:", dog.breed); // Output: Dog Breed: Golden Retriever
console.log("Dog Sound:", dog.sound()); // Output: Dog Sound: Woof!
console.log("Dog Fetch:", dog.fetch()); // Output: Dog Fetch: Buddy is fetching...

// 5. Benefits of Class Inheritance
console.log("\n5. Benefits of Class Inheritance:");

// - Promotes code reuse and modularity
// - Allows for hierarchical organization of code
// - Facilitates polymorphism and method overriding

// Class inheritance is a powerful feature in object-oriented programming that enables developers to build complex and structured applications effectively.
