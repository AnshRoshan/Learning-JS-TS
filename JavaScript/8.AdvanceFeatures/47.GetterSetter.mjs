// getters_setters.mjs

// 1. Introduction to Getters and Setters
console.log("1. Introduction to Getters and Setters:");

// Getters and setters are special functions in JavaScript that allow for the access and modification of object properties with additional logic. They provide control over how properties are accessed and assigned.

// 2. Creating Getters and Setters
console.log("\n2. Creating Getters and Setters:");

// You can define getters and setters using the get and set keywords within object literals or class definitions.

// Example:
const person = {
    _name: 'John',
    get name() {
        return this._name;
    },
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.error('Name must be a string');
        }
    }
};

console.log("Current Name:", person.name);
person.name = 'Jane';
console.log("Updated Name:", person.name);

// 3. Use Cases of Getters and Setters
console.log("\n3. Use Cases of Getters and Setters:");

// - Encapsulating data access and modification logic
// - Implementing computed properties
// - Validating input before assignment

// Example:
// Encapsulating data access and modification logic
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set width(newWidth) {
        if (typeof newWidth === 'number' && newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error('Width must be a positive number');
        }
    }

    set height(newHeight) {
        if (typeof newHeight === 'number' && newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error('Height must be a positive number');
        }
    }
}

const rectangle = new Rectangle(4, 5);
console.log("Area:", rectangle.area);

// Validating input before assignment
rectangle.width = -2;
rectangle.height = 'invalid';

// 4. Benefits of Getters and Setters
console.log("\n4. Benefits of Getters and Setters:");

// - Encapsulation of data access and modification logic
// - Abstraction of implementation details
// - Enabling computed properties and validation

// Getters and setters provide a powerful mechanism for controlling access to object properties and adding additional logic when accessing or assigning values, improving code maintainability and robustness.
