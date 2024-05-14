// string_template_literals.mjs

// 1. Basic Usage
console.log("1. Basic Usage:");

// Using string template literals (enclosed in backticks)
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, Alice!"

// 2. Multiline Strings
console.log("\n2. Multiline Strings:");

// Multiline strings can be easily created using string template literals
let multilineString = `
  This is a multiline string.
  It can span across multiple lines
  without the need for escape characters.
`;
console.log(multilineString);

// 3. Expression Interpolation
console.log("\n3. Expression Interpolation:");

// JavaScript expressions can be directly interpolated within string template literals
let a = 5;
let b = 7;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // Output: "The sum of 5 and 7 is 12"

// 4. Tagged Templates
console.log("\n4. Tagged Templates:");

// Tagged templates allow custom processing of template literals by a tag function
function tag(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values);
    return "Processed string";
}

let taggedResult = tag`The result is ${a + b}`;
console.log("Tagged Result:", taggedResult); // Output: "Processed string"

// 5. Escaping Backticks and Dollar Signs
console.log("\n5. Escaping Backticks and Dollar Signs:");

// Backticks and dollar signs can be escaped using backslashes
let escapedString = `\`Backticks\` and \$Dollar Signs\$ are escaped`;
console.log(escapedString); // Output: "`Backticks` and $Dollar Signs$ are escaped"
