// scoping.mjs

// Global Scope
const globalVariable = "I'm in the global scope"

function outerFunction1() {
  // Outer Function Scope
  const outerVariable = "I'm in the outer function scope"

  function innerFunction() {
    // Inner Function Scope
    const innerVariable = "I'm in the inner function scope"

    console.log('Inner Function:', globalVariable) // Accessing global variable
    console.log('Inner Function:', outerVariable) // Accessing outer variable
    console.log('Inner Function:', innerVariable) // Accessing inner variable
  }

  innerFunction()

  // Accessing inner variable from outer function scope (closure)
  // console.log("Outer Function (closure):", innerVariable);
  // ReferenceError: Can't find variable: innerVariable
}

outerFunction1()

// Accessing global variable outside the functions
console.log('Global Scope:', globalVariable)
// console.log("Global Scope:", outerVariable); // Error: outerVariable is not defined
// console.log("Global Scope:", innerVariable); // Error: innerVariable is not defined

// closures.mjs

function outerFunction(outerParam) {
  // Variable declared in outer function scope
  const outerVariable = "I'm in the outer function scope"

  // Inner function accessing outer variables and parameters
  function innerFunction(innerParam) {
    // Inner function accessing outer function's variables
    console.log('Inner Function - Outer Variable:', outerVariable)
    console.log('Inner Function - Outer Parameter:', outerParam)
    console.log('Inner Function - Inner Parameter:', innerParam)
  }

  // Returning the inner function
  return innerFunction
}

// Creating closures by invoking outerFunction
const closure1 = outerFunction('outerParamValue1')
const closure2 = outerFunction('outerParamValue2')

// Invoking closures with different inner parameters
closure1('innerParamValue1')
closure2('innerParamValue2')
