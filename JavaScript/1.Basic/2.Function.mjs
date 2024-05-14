
// 1. Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 2. Function Expression
const farewell = function (name) {
    console.log(`Goodbye, ${name}!`);
};

// 3. Arrow Function
const sayHello = (name) => {
    console.log(`Greetings, ${name}!`);
};

// 4. Function Invocation
greet("Alice"); // Output: Hello, Alice!
farewell("Bob"); // Output: Goodbye, Bob!
sayHello("Charlie"); // Output: Greetings, Charlie!

// 5. Return Values
function add(a, b) {
    return a + b;
}

const result = add(3, 4);
console.log("Addition Result:", result); // Output: Addition Result: 7

// 6. Default Parameters
function greetDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetDefault(); // Output: Hello, Guest!
greetDefault("David"); // Output: Hello, David!

// 7. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const total = sum(1, 2, 3, 4, 5);
console.log("Total Sum:", total); // Output: Total Sum: 15

// 8. Named Function Expression
const factorial = function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
};

console.log("Factorial of 5:", factorial(5)); // Output: Factorial of 5: 120

// 9. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This is an IIFE!");
})();

// 10. Function as a Method
const person = {
    name: "Emma",
    greetMethod: function () {
        console.log(`Hi, I'm ${this.name}.`);
    }
};

person.greetMethod(); // Output: Hi, I'm Emma.

// 11. Functions as First-class Citizens
const myFunction = function () {
    console.log("I'm a first-class function!");
};

const functionArray = [myFunction, greet, farewell];
functionArray.forEach(func => func());

// 12. Recursion
function countdown(num) {
    if (num <= 0) {
        console.log("Liftoff!");
    } else {
        console.log(num);
        countdown(num - 1);
    }
}

countdown(5); // Output: 5 4 3 2 1 Liftoff!


// Regular function declaration
function regularFunction(a, b) {
    return a + b;
}
console.log("Regular function:", regularFunction(2, 3)); // Output: 5

// Arrow function declaration
const arrowFunction = (a, b) => {
    return a + b;
};
console.log("Arrow function:", arrowFunction(2, 3)); // Output: 5

// Arrow functions with implicit return
const implicitArrow = (a, b) => a + b;
console.log("Implicit arrow function:", implicitArrow(2, 3)); // Output: 5

// Arrow functions with single argument
const singleArgumentArrow = a => a * 2;
console.log("Single argument arrow function:", singleArgumentArrow(5)); // Output: 10

// Arrow functions and 'this' context
const obj = {
    name: "John",
    regularFunc: function () {
        console.log("Regular function this:", this); // 'this' refers to obj
        setTimeout(function () {
            console.log("Regular function setTimeout this:", this); // 'this' refers to global object (in a browser), or undefined (in strict mode)
        }, 1000);
    },
    arrowFunc: () => {
        console.log("Arrow function this:", this); // 'this' refers to the surrounding scope (global scope or module scope in this case)
        setTimeout(() => {
            console.log("Arrow function setTimeout this:", this); // 'this' still refers to the surrounding scope (lexical 'this')
        }, 1000);
    }
};

obj.regularFunc(); // Output: "Regular function this:", { name: 'John', regularFunc: [Function: regularFunc], arrowFunc: [Function: arrowFunc] }
// Output after 1 second: "Regular function setTimeout this:", window (in a browser), or undefined (in strict mode)

obj.arrowFunc(); // Output: "Arrow function this:", {}
// Output after 1 second: "Arrow function setTimeout this:", {}
