// variable_features.mjs

// Global Scope
console.log("Global Scope:");

// 1. var: Function Scope
var varVariable = "I'm a var variable";

function varScopeTest() {
  if (true) {
    var varVariableInsideIf = "I'm a var variable inside if";
  }
  console.log("Var inside function:", varVariable);
  console.log("Var inside function (inside if):", varVariableInsideIf);
}

varScopeTest();
console.log("Var outside function:", varVariable);

// 2. let and const: Block Scope
console.log("\nBlock Scope:");

// 3. let: Mutable Variable
let letVariable = "I'm a let variable";
letVariable = "I'm a modified let variable";
console.log("Let variable:", letVariable);

// 4. const: Immutable Variable
const constVariable = "I'm a const variable";
// constVariable = "I'm trying to modify const variable"; // Error: Assignment to constant variable.

// 5. Hoisting: let and const are not hoisted, var is hoisted
console.log("\nHoisting:");

console.log("Before hoisting:");
console.log(hoistedVar); // Output: undefined
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization

var hoistedVar = "I'm a hoisted var";
let hoistedLet = "I'm a hoisted let";
const hoistedConst = "I'm a hoisted const";

console.log("After hoisting:");
console.log(hoistedVar); // Output: I'm a hoisted var
console.log(hoistedLet); // Output: I'm a hoisted let
console.log(hoistedConst); // Output: I'm a hoisted const

// 6. Temporal Dead Zone (TDZ): let and const variables are in TDZ until initialized
console.log("\nTemporal Dead Zone (TDZ):");

// console.log(tdzVar); // Error: Cannot access 'tdzVar' before initialization
// console.log(tdzLet); // Error: Cannot access 'tdzLet' before initialization
// console.log(tdzConst); // Error: Cannot access 'tdzConst' before initialization

let tdzLet = "I'm in TDZ (let)";
const tdzConst = "I'm in TDZ (const)";

// 7. Redeclaration: let and const cannot be redeclared in the same scope, var can
console.log("\nRedeclaration:");

// var varVariable = "I'm a redeclared var"; // No error
// let letVariable = "I'm a redeclared let"; // Error: Identifier 'letVariable' has already been declared
// const constVariable = "I'm a redeclared const"; // Error: Identifier 'constVariable' has already been declared

// 8. Scoping: var variables have function scope, let and const have block scope
console.log("\nScoping:");

function scopingTest() {
  var varVariableInsideFunction = "I'm a var variable inside function";
  let letVariableInsideFunction = "I'm a let variable inside function";
  const constVariableInsideFunction = "I'm a const variable inside function";

  if (true) {
    var varVariableInsideBlock = "I'm a var variable inside block";
    let letVariableInsideBlock = "I'm a let variable inside block";
    const constVariableInsideBlock = "I'm a const variable inside block";
  }

  console.log("Var inside function:", varVariableInsideFunction);
  // console.log("Var inside block:", varVariableInsideBlock); // Error: varVariableInsideBlock is not defined
  console.log("Let inside function:", letVariableInsideFunction);
  // console.log("Let inside block:", letVariableInsideBlock); // Error: letVariableInsideBlock is not defined
  console.log("Const inside function:", constVariableInsideFunction);
  // console.log("Const inside block:", constVariableInsideBlock); // Error: constVariableInsideBlock is not defined
}

scopingTest();

// console.log("Var outside function:", varVariableInsideFunction); // Error: varVariableInsideFunction is not defined
// console.log("Let outside function:", letVariableInsideFunction); // Error: letVariableInsideFunction is not defined
// console.log("Const outside function:", constVariableInsideFunction); // Error: constVariableInsideFunction is not defined
