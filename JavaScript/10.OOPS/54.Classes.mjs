// classes.mjs

// 1. Introduction to Classes
console.log("1. Introduction to Classes:");

// Classes in JavaScript are syntactical sugar over the existing prototype-based inheritance. They provide a more familiar and convenient syntax for creating objects and defining their behavior.

// 2. Creating Classes
console.log("\n2. Creating Classes:");

// You can define classes using the class keyword and create instances of those classes using the new keyword.

// Example:
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

const person1 = new Person('John');
console.log("Greeting:", person1.greet()); // Output: Greeting: Hello, John!

// 3. Inheritance with Classes
console.log("\n3. Inheritance with Classes:");

// Classes support inheritance using the extends keyword.

// Example:
class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying for ${this.grade} grade.`;
    }
}

const student1 = new Student('Alice', '5th');
console.log("Student:", student1);
console.log("Student Greeting:", student1.greet()); // Output: Student Greeting: Hello, Alice!
console.log("Student Study:", student1.study()); // Output: Student Study: Alice is studying for 5th grade.

// 4. Static Methods and Properties
console.log("\n4. Static Methods and Properties:");

// Classes can also define static methods and properties, which are called directly on the class itself, rather than on instances of the class.

// Example:
class MathUtils {
    static square(x) {
        return x * x;
    }
}

console.log("Square of 5:", MathUtils.square(5)); // Output: Square of 5: 25

// 5. Use Cases of Classes
console.log("\n5. Use Cases of Classes:");

// - Modeling real-world entities and their behavior
// - Encapsulating data and behavior within a single unit
// - Implementing inheritance and polymorphism

// 6. Benefits of Classes
console.log("\n6. Benefits of Classes:");

// - Provides a more familiar and intuitive syntax for defining objects and their behavior
// - Encourages code organization and maintainability
// - Supports inheritance and polymorphism, facilitating code reuse and extensibility

// Classes in JavaScript offer a more convenient and intuitive way to work with objects, allowing developers to organize and structure their code effectively.
