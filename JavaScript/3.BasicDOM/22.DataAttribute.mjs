// data_attributes.mjs

// 1. Introduction to Data Attributes
console.log("1. Introduction to Data Attributes:");

// Data attributes are custom attributes that can be added to HTML elements to store extra information.

// Example:
// <div id="myElement" data-user-id="123" data-user-name="John"></div>

// In this example, "data-user-id" and "data-user-name" are data attributes.

// 2. Accessing Data Attributes in JavaScript
console.log("\n2. Accessing Data Attributes in JavaScript:");

// Data attributes can be accessed and manipulated using the dataset property of the element.

// Example:
const element = document.getElementById("myElement");

// Accessing data attributes
const userId = element.dataset.userId;
const userName = element.dataset.userName;

console.log("User ID:", userId); // Outputs: 123
console.log("User Name:", userName); // Outputs: John

// 3. Setting Data Attributes in JavaScript
console.log("\n3. Setting Data Attributes in JavaScript:");

// Data attributes can be set or modified using the dataset property as well.

// Example:
element.dataset.userAge = 30;

// Now the element has a new data attribute called "data-user-age" with the value of 30.

// 4. Using Data Attributes in CSS
console.log("\n4. Using Data Attributes in CSS:");

// Data attributes can also be used in CSS selectors to style elements.

// Example:
/* CSS */
/*
[data-user-type="admin"] {
  color: red;
}

[data-user-type="user"] {
  color: blue;
}
*/

// This CSS rule will style elements differently based on their "data-user-type" attribute.

// 5. Using Data Attributes with JavaScript Events
console.log("\n5. Using Data Attributes with JavaScript Events:");

// Data attributes can be used to store information that can be used to handle events.

// Example:
// <button id="myButton" data-action="delete">Delete</button>

// JavaScript
const button = document.getElementById("myButton");

button.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (action === "delete") {
        console.log("Delete button clicked");
        // Perform delete action...
    }
});

// In this example, the "data-action" attribute is used to determine the action to be performed when the button is clicked.

// 6. Best Practices
console.log("\n6. Best Practices:");

// - Use data attributes to store additional information that is not suitable for other attributes.
// - Prefix data attribute names with "data-" to conform to HTML5 standards.
// - Avoid using data attributes for information that can be derived from the element's structure or existing attributes.

// Example:
// <div class="user" data-user-id="123">John</div>
