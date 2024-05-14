// dom_traversal.mjs

// 1. Introduction to DOM Traversal
console.log("1. Introduction to DOM Traversal:");

// DOM traversal refers to the process of navigating through the Document Object Model (DOM) to access or manipulate elements.

// Example:
// <div id="parent">
//   <div class="child">Child 1</div>
//   <div class="child">Child 2</div>
//   <div class="child">Child 3</div>
// </div>

// In this example, we have a parent element with three child elements.

// 2. Accessing Child Elements
console.log("\n2. Accessing Child Elements:");

// Child elements can be accessed using properties and methods of the parent element.

// Example:
const parentElement = document.getElementById("parent");

// Accessing child elements by index
const firstChild = parentElement.children[0];

// Accessing child elements using query selectors
const secondChild = parentElement.querySelector(".child");

console.log("First Child:", firstChild.textContent); // Outputs: Child 1
console.log("Second Child:", secondChild.textContent); // Outputs: Child 2

// 3. Accessing Parent Element
console.log("\n3. Accessing Parent Element:");

// Parent elements can be accessed using the parentElement property.

// Example:
const firstChildParent = firstChild.parentElement;

console.log("First Child's Parent:", firstChildParent.id); // Outputs: parent

// 4. Accessing Sibling Elements
console.log("\n4. Accessing Sibling Elements:");

// Sibling elements are elements that share the same parent.

// Example:
const secondChildSibling = secondChild.nextElementSibling;

console.log("Second Child's Next Sibling:", secondChildSibling.textContent); // Outputs: Child 3

// 5. Traversing Up the DOM Tree
console.log("\n5. Traversing Up the DOM Tree:");

// Methods like parentElement can be used to traverse up the DOM tree.

// Example:
const childGrandparent = firstChildParent.parentElement;

console.log("Child's Grandparent:", childGrandparent.tagName); // Outputs: DIV (the parent of the parent)

// 6. Traversing Down the DOM Tree
console.log("\n6. Traversing Down the DOM Tree:");

// Methods like children and querySelector can be used to traverse down the DOM tree.

// Example:
const grandparentChildren = childGrandparent.children;

console.log("Grandparent's Children Count:", grandparentChildren.length); // Outputs: 3

// 7. Best Practices
console.log("\n7. Best Practices:");

// - Use DOM traversal methods judiciously to avoid excessive DOM manipulation and improve performance.
// - Cache references to elements whenever possible to avoid repetitive DOM traversal.
// - Use query selectors for complex traversals or when elements cannot be easily accessed by their properties.

// Example:
// const element = document.querySelector(".className");
