// class_and_id_features.mjs

// 1. Accessing Elements by Class
console.log("1. Accessing Elements by Class:");

// Elements can be accessed by their class names using document.getElementsByClassName() method.
// This method returns a collection of elements with the specified class name.

// Example:
let elementsByClass = document.getElementsByClassName("myClass");
console.log("Elements by Class:", elementsByClass);

// 2. Accessing Elements by ID
console.log("\n2. Accessing Elements by ID:");

// Elements can be accessed by their IDs using document.getElementById() method.
// This method returns the element with the specified ID.

// Example:
let elementById = document.getElementById("myId");
console.log("Element by ID:", elementById);

// 3. Adding and Removing Classes
console.log("\n3. Adding and Removing Classes:");

// Classes can be added to an element using the classList.add() method.
// Classes can be removed from an element using the classList.remove() method.

// Example:
elementById.classList.add("newClass");
console.log("Element with Added Class:", elementById);

elementById.classList.remove("newClass");
console.log("Element with Removed Class:", elementById);

// 4. Styling Elements with Classes and IDs
console.log("\n4. Styling Elements with Classes and IDs:");

// CSS rules can be applied to elements using classes and IDs.
// Classes are typically used for applying styles to multiple elements, while IDs are used for unique styling.

// Example:
// CSS:
// .myClass {
//   color: blue;
// }

// #myId {
//   font-weight: bold;
// }

// HTML:
// <div class="myClass" id="myId">Styled Element</div>

// 5. JavaScript Interaction
console.log("\n5. JavaScript Interaction:");

// Elements with classes and IDs can be interacted with using JavaScript.
// Event listeners can be added to elements to handle user interactions.

// Example:
elementById.addEventListener("click", () => {
    console.log("Element clicked");
});

// 6. Semantic Use of Classes and IDs
console.log("\n6. Semantic Use of Classes and IDs:");

// Classes and IDs should be used semantically to provide meaning to elements.
// Classes are used to group elements with similar characteristics.
// IDs are used to uniquely identify elements within a document.

// Example:
// HTML:
// <div class="header">Header</div>
// <div class="content">Content</div>
// <div class="footer">Footer</div>

// 7. Best Practices
console.log("\n7. Best Practices:");

// - Use classes for styling and grouping elements with similar characteristics.
// - Use IDs for uniquely identifying elements within a document.
// - Avoid using inline styles and inline event handlers.

// Example:
// HTML:
// <div id="uniqueElement">Unique Element</div>

// CSS:
// #uniqueElement {
//   color: red;
// }
