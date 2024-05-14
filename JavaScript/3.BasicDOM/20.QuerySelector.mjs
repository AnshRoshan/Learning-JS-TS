// query_selectors.mjs

// 1. Selecting Elements by CSS Selectors
console.log("1. Selecting Elements by CSS Selectors:");

// Query selectors allow selecting elements from the DOM using CSS selector syntax.
// They provide powerful ways to access and manipulate elements.

// Examples:
// Selecting elements by ID
let elementById = document.querySelector("#myElement");

// Selecting elements by class name
let elementsByClass = document.querySelectorAll(".myClass");

// Selecting elements by tag name
let elementsByTagName = document.querySelectorAll("div");

// Selecting elements by attribute
let elementsByAttribute = document.querySelectorAll("[data-custom]");

// Selecting elements by compound selector
let compoundSelector = document.querySelectorAll("div.myClass");

// 2. Basic Query Selectors
console.log("\n2. Basic Query Selectors:");

// Query selectors can be used to select elements using various basic selectors.

// Examples:
// Selecting the first element with a class name
let firstElementByClass = document.querySelector(".myClass");

// Selecting the first element with a specific tag name
let firstElementByTagName = document.querySelector("div");

// Selecting the first element with a specific attribute
let firstElementByAttribute = document.querySelector("[data-custom]");

// 3. Complex Query Selectors
console.log("\n3. Complex Query Selectors:");

// Query selectors can be combined to create complex selectors.

// Examples:
// Selecting all elements with a class name inside a specific element
let elementsInsideElement = document.querySelectorAll("#parentElement .childClass");

// Selecting the first child element with a specific class name
let firstChildElement = document.querySelector("#parentElement > .childClass");

// 4. Using Query Selectors with Events
console.log("\n4. Using Query Selectors with Events:");

// Query selectors can be used to select elements and attach event listeners to them.

// Example:
document.querySelector("#myButton").addEventListener("click", () => {
    console.log("Button clicked");
});

// 5. Manipulating Elements with Query Selectors
console.log("\n5. Manipulating Elements with Query Selectors:");

// Query selectors can be used to select elements and manipulate their properties, styles, and content.

// Example:
let elementToManipulate = document.querySelector("#elementToManipulate");
elementToManipulate.textContent = "New Text Content";
elementToManipulate.style.color = "blue";

// 6. Combining Query Selectors with Iteration
console.log("\n6. Combining Query Selectors with Iteration:");

// Query selectors can return NodeList objects, which can be iterated over using loops or array methods.

// Example:
let allDivs = document.querySelectorAll("div");
allDivs.forEach((div) => {
    console.log(div.textContent);
});

// 7. Limitations of Query Selectors
console.log("\n7. Limitations of Query Selectors:");

// Query selectors have some limitations, such as not being able to select elements based on their position in the DOM or their text content.

// Example:
// Selecting the first child element with a specific text content
// This cannot be achieved directly with query selectors.

