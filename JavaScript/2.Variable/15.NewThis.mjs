// new_and_this.mjs

// 1. The "new" Keyword
console.log("1. The 'new' Keyword:");

// The "new" keyword is used to create instances of user-defined object types (constructor functions).
// When used with a constructor function, "new" creates a new object and sets the "this" keyword to refer to that object.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Creating a new instance of the Person object using the "new" keyword
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

console.log("Person 1:", person1); // Output: Person { name: 'Alice', age: 30 }
console.log("Person 2:", person2); // Output: Person { name: 'Bob', age: 25 }

// 2. The "this" Keyword
console.log("\n2. The 'this' Keyword:");

// The "this" keyword refers to the object that is currently executing the function.
// In the context of a constructor function, "this" refers to the newly created instance of the object.
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;

        this.getDetails = function () {
            return `${this.make} ${this.model}`;
        };
    }
}

let car1 = new Car("Toyota", "Camry");
console.log("Car 1 details:", car1.getDetails()); // Output: "Toyota Camry"

let car2 = new Car("Honda", "Accord");
console.log("Car 2 details:", car2.getDetails()); // Output: "Honda Accord"

// 3. Binding "this" with Arrow Functions
console.log("\n3. Binding 'this' with Arrow Functions:");

// Unlike regular functions, arrow functions do not have their own "this" value.
// They lexically bind "this" from the surrounding code context.
// This can be beneficial when defining methods in objects to maintain the correct value of "this".
class Person2 {
    constructor(name) {
        this.name = name;

        // Using regular function
        this.sayHello = function () {
            console.log(`Hello, my name is ${this.name}`);
        };

        // Using arrow function
        this.sayHelloArrow = () => {
            console.log(`Hello, my name is ${this.name}`);
        };
    }
}

let person3 = new Person2("Alice");

// When using a regular function, "this" refers to the object that calls the method.
person3.sayHello(); // Output: "Hello, my name is Alice"

// When using an arrow function, "this" refers to the object where the arrow function was defined (lexical scope).
person3.sayHelloArrow(); // Output: "Hello, my name is Alice"
