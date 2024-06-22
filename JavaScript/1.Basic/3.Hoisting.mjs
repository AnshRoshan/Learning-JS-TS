// Variable declaration gets hoisted to the top of its scope.
console.log(myVar) // Output: undefined
var myVar = 10

// Function declarations are hoisted entirely.
hoistedFunction() // Output: "This function was hoisted!"
function hoistedFunction() {
  console.log('This function was hoisted!')
}

// Function expressions are not hoisted entirely.
// Only the variable declaration is hoisted, not the function assignment.
// So, calling the function before its declaration results in an error.
// nonHoistedFunction(); // Error: nonHoistedFunction is not a function
const nonHoistedFunction = function () {
  console.log('This function was not hoisted!')
}

// Let and const declarations are hoisted but not initialized.
// Accessing them before the actual declaration results in a ReferenceError.
// console.log(myLet); // Error: Cannot access 'myLet' before initialization
let myLet = 20

// Using const with an object allows modification of its properties,
// but reassignment of the variable itself is not allowed.
const myConstObject = {
  key: 'value',
}
myConstObject.key = 'updated value' // This is allowed
// myConstObject = {}; // Error: Assignment to constant variable.

// Class declarations are also hoisted like function declarations.
const myObj = new MyClass()
function MyClass() {
  this.name = 'Example'
}
console.log(myObj.name) // Output: "Example"

// However, class expressions are not hoisted.
// Calling a class expression before its declaration results in a ReferenceError.
// const myClassInstance = new MyClassExpression(); // Error: MyClassExpression is not defined
const MyClassExpression = class {
  constructor() {
    this.name = 'Example Expression'
  }
}

// Arrow functions are also not hoisted.
// So, calling an arrow function expression before its declaration results in a ReferenceError.
// arrowFunction(); // Error: arrowFunction is not defined
const arrowFunction = () => {
  console.log('This arrow function was not hoisted!')
}
