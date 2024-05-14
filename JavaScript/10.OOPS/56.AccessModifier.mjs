// access_modifiers.mjs

// 1. Introduction to Access Modifiers
console.log("1. Introduction to Access Modifiers:");

// Access modifiers control the visibility of class members (properties and methods) within a class, limiting their accessibility from outside the class. Common access modifiers include public, private, and protected.

// 2. Public Access
console.log("\n2. Public Access:");

// In JavaScript, all class members are public by default, meaning they can be accessed from outside the class.

// Example:
class Person {
    constructor(name) {
        this.name = name; // Public property
    }

    greet() {
        return `Hello, ${this.name}!`; // Public method
    }
}

const person = new Person('John');
console.log("Public Property:", person.name); // Output: Public Property: John
console.log("Public Method:", person.greet()); // Output: Public Method: Hello, John!

// 3. Private Members (Convention)
console.log("\n3. Private Members (Convention):");

// In JavaScript, private members are not natively supported, but you can achieve encapsulation using naming conventions or closures.

// Example using naming convention:
class Car {
    constructor(make, model) {
        this.__make = make; // Convention: Prefix with underscore to indicate private
        this.__model = model;
    }

    __startEngine() {
        return `${this.__make} ${this.__model} engine started.`;
    }

    drive() {
        return this.__startEngine() + ' Vroom!'; // Accessing private method
    }
}

const car = new Car('Toyota', 'Camry');
console.log("Private Property:", car.__make); // Output: Private Property: Toyota (Not truly private, convention only)
console.log("Public Method (accessing private method):", car.drive()); // Output: Public Method (accessing private method): Toyota Camry engine started. Vroom!


// 4. Protected Members (Convention)
console.log("\n4. Protected Members (Convention):");

// Similar to private members, protected members are not natively supported in JavaScript. They can be indicated using naming conventions or closures.

// Example using naming convention:
class Shape {
    constructor() {
        this._color = 'red'; // Convention: Prefix with underscore to indicate protected
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log("Protected Property:", circle._color); // Output: Protected Property: red (Not truly protected, convention only)

// 5. Differences and Use Cases
console.log("\n5. Differences and Use Cases:");

// - Public members: Accessible from outside the class, suitable for properties and methods intended to be accessed externally.
// - Private members: Not natively supported in JavaScript, can be simulated using naming conventions or closures, suitable for encapsulating implementation details.
// - Protected members: Also not natively supported, indicated using naming conventions or closures, suitable for properties and methods intended to be accessed by subclasses.

// While JavaScript doesn't have built-in access modifiers, conventions and patterns can be used to achieve similar behavior, providing encapsulation and control over the visibility of class members.


// ---------------------------------------------------------------------

// In JavaScript, starting a variable or method name with # makes it private to the class where it is declared. This is a feature introduced in ECMAScript 2022 (ES12)

// 1. Introduction to Private Members
console.log("1. Introduction to Private Members:");

// Starting a variable or method name with `#` makes it private to the class where it is declared. This ensures that the private member cannot be accessed or modified from outside the class.

// 2. Creating a Class with Private Members
console.log("\n2. Creating a Class with Private Members:");

class BankAccount {
    #balance; // Private property

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    #updateBalance(amount) { // Private method
        this.#balance += amount;
    }

    deposit(amount) {
        this.#updateBalance(amount);
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.#updateBalance(-amount);
        console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

// 3. Using the BankAccount Class
console.log("\n3. Using the BankAccount Class:");

const account = new BankAccount(1000);

console.log("Initial Balance:", account.getBalance()); // Output: Initial Balance: 1000

account.deposit(500); // Output: Deposited 500. New balance: 1500

account.withdraw(200); // Output: Withdrawn 200. New balance: 1300

console.log("Final Balance:", account.getBalance()); // Output: Final Balance: 1300

// Private members cannot be accessed or modified from outside the class.
// console.log("Attempt to Access Private Property:", account.#balance); // Throws SyntaxError: Private field '#balance' must be declared in an enclosing class

// Private methods cannot be called from outside the class.
// account.#updateBalance(200); // Throws SyntaxError: Private field '#updateBalance' must be declared in an enclosing class
