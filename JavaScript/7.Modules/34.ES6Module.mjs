// es6_modules.mjs

// 1. Introduction to ES6 Modules
console.log("1. Introduction to ES6 Modules:");

// ES6 Modules are a standard way to organize and structure JavaScript code into reusable components. They allow you to split your code into multiple files, each containing a module with its own functionality, variables, and exports.

// 2. Creating Modules
console.log("\n2. Creating Modules:");

// In ES6, each file is treated as a separate module. You can create a module by defining variables, functions, or classes within the file and exporting them using the export keyword.

// Example: module1.mjs
/*
// Exporting variables
export const name = "John";
export const age = 30;

// Exporting functions
export function greet() {
  console.log("Hello, " + name);
}

// Exporting classes
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
*/

// 3. Importing Modules
console.log("\n3. Importing Modules:");

// To use modules defined in other files, you import them into your current file using the import keyword followed by the module specifier (path to the module file).

// Example: main.mjs
/*
// Importing variables, functions, and classes from module1.mjs
import { name, age, greet, Person } from "./module1.mjs";

console.log("Name:", name);
console.log("Age:", age);

greet();

const john = new Person("John", 30);
console.log("Person:", john);
*/

// 4. Default Exports
console.log("\n4. Default Exports:");

// In addition to named exports, ES6 Modules also support default exports, where a module exports a single value or object as the default export.

// Example: module2.mjs
/*
// Default export
export default function greet(name) {
  console.log("Hello, " + name);
}
*/

// Importing a default export
/*
import greet from "./module2.mjs";

greet("John");
*/

// 5. Module Loading and Execution
console.log("\n5. Module Loading and Execution:");

// When a module is imported, its code is executed only once, and the exports are cached. Subsequent imports of the same module reuse the cached exports, improving performance and avoiding redundant executions.

// Example:
// Importing module1.mjs multiple times
/*
import { name } from "./module1.mjs";

console.log("Name:", name);
*/

// 6. Benefits of ES6 Modules
console.log("\n6. Benefits of ES6 Modules:");

// - Encapsulation: Modules encapsulate code into separate units, making it easier to manage and maintain large codebases.
// - Reusability: Modules promote code reuse by allowing you to import and use functionality defined in other modules.
// - Dependency Management: Modules provide a structured way to manage dependencies between different parts of your application.
// - Scoped Imports: Module imports are scoped to the module, preventing global namespace pollution and conflicts.

// ES6 Modules are widely used in modern JavaScript development for building modular, maintainable, and scalable applications.

