// control_flow.mjs

// 1. Introduction to Control Flow Statements
console.log("1. Introduction to Control Flow Statements:");

// Control flow statements are essential constructs in programming languages like JavaScript, allowing developers to dictate the flow of execution based on certain conditions or criteria.

// 2. The if Statement
console.log("\n2. The if Statement:");

// The if statement is a fundamental building block of control flow. It evaluates a condition and executes a block of code if the condition is true.

// Example:
const num = 10;

if (num > 0) {
    console.log("Number is positive");
}

// In this example, if the value of 'num' is greater than 0, the message "Number is positive" will be logged to the console.

// 3. The switch Statement
console.log("\n3. The switch Statement:");

// The switch statement provides a way to execute different blocks of code based on the value of a variable or expression.

// Example:
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    default:
        console.log("Some other day");
}

// Here, depending on the value of 'day', different messages will be logged to the console.

// 4. The Ternary Operator
console.log("\n4. The Ternary Operator:");

// The ternary operator is a concise way to write if-else statements, offering a shorthand syntax for conditional expressions.

// Syntax: condition ? expression1 : expression2

// Example:
const isRaining = true;
const weather = isRaining ? "Grab an umbrella" : "Enjoy the sunshine";

console.log(weather);

// In this example, if it's raining, the message "Grab an umbrella" will be assigned to the 'weather' variable; otherwise, "Enjoy the sunshine" will be assigned.

// 5. Differences and Use Cases
console.log("\n5. Differences and Use Cases:");

// - Use if statements for simple conditional branching where you have a single condition to evaluate.
// - Use switch statements when you have multiple conditions to evaluate against a single variable or expression.
// - Use the ternary operator for concise, one-liner conditional expressions, especially when assigning values or returning values from functions.

// Example:
// If statement
const age = 25;
if (age >= 18) {
    console.log("You are an adult");
}

// Switch statement
const fruit = "Apple";
switch (fruit) {
    case "Apple":
        console.log("It's an apple");
        break;
    case "Banana":
        console.log("It's a banana");
        break;
    default:
        console.log("Unknown fruit");
}

// Ternary operator
const x = 10;
const y = x > 0 ? "Positive" : "Negative";
console.log(y);

// Each control flow construct has its own strengths and use cases, so choose the one that best fits the logic and readability of your code.
