// short_circuit_evaluation.mjs

// 1. Introduction to Short-Circuit Evaluation
console.log("1. Introduction to Short-Circuit Evaluation:");

// Short-circuit evaluation is a concept in programming languages like JavaScript where the second operand of a logical expression is not evaluated if the result can be determined by the first operand alone.

// 2. The && (Logical AND) Operator
console.log("\n2. The && (Logical AND) Operator:");

// The && operator returns true if both operands are true. However, if the first operand evaluates to false, the second operand is not evaluated because the result is already determined to be false.

// Example:
const x = 5;
const y = 10;
const z = 0;

const result = x > 0 && y > 0 && z > 0;

console.log("Result:", result); // Outputs: false

// In this example, since 'x' is not greater than 0, the evaluation stops at the first operand, and 'result' is assigned false without evaluating the remaining operands.

// 3. The || (Logical OR) Operator
console.log("\n3. The || (Logical OR) Operator:");

// The || operator returns true if at least one of the operands is true. If the first operand evaluates to true, the second operand is not evaluated because the result is already determined to be true.

// Example:
const a = 0;
const b = 20;
const c = 30;

const result2 = a || b || c;

console.log("Result 2:", result2); // Outputs: 20

// In this example, since 'a' is 0 (which is falsy), the evaluation continues to the second operand, which is 20 (truthy). Therefore, 'result2' is assigned the value of 20.

// 4. Short-Circuit Evaluation with Ternary Operator
console.log("\n4. Short-Circuit Evaluation with Ternary Operator:");

// Short-circuit evaluation also applies to the ternary operator (conditional operator), where the second or third operand may not be evaluated depending on the condition.

// Example:
const condition = false;
const result3 = condition ? "True" : "False";

console.log("Result 3:", result3); // Outputs: False

// In this example, since the condition is false, the second operand ("True") is not evaluated, and "False" is assigned to 'result3' directly.

// 5. Use Cases and Benefits
console.log("\n5. Use Cases and Benefits:");

// - Short-circuit evaluation can improve performance by avoiding unnecessary evaluations.
// - It is commonly used for conditional checks, default values, and error handling.
// - It provides a concise and expressive way to write conditional expressions.

// Example:
// Conditional check
const value = 10;
if (value !== undefined && value !== null) {
    // Code block
}

// Default value assignment
const username = userInput || "Guest";

// Error handling
const result4 = fetchDataFromAPI() || "Error fetching data";

// Using short-circuit evaluation can make your code more readable and efficient, especially in scenarios where conditional logic is prevalent.
