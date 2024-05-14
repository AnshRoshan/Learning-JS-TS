// document_object.mjs

// 1. Accessing Elements
console.log("1. Accessing Elements:");

// The "document" object represents the HTML document loaded in the browser window.
// It provides methods for accessing and manipulating elements within the document.

// Examples:
let elementById = document.getElementById("myElement");
console.log("Element by ID:", elementById);

let elementsByClassName = document.getElementsByClassName("myClass");
console.log("Elements by Class Name:", elementsByClassName);

let elementsByTagName = document.getElementsByTagName("div");
console.log("Elements by Tag Name:", elementsByTagName);

let elementByQuerySelector = document.querySelector("#myElement");
console.log("Element by Query Selector:", elementByQuerySelector);

let elementsByQuerySelectorAll = document.querySelectorAll(".myClass");
console.log("Elements by Query Selector All:", elementsByQuerySelectorAll);

// 2. Manipulating Elements
console.log("\n2. Manipulating Elements:");

// The "document" object allows manipulation of elements, attributes, and content within the document.

// Examples:
elementById.textContent = "Updated Text Content";
elementById.style.color = "red";
elementById.classList.add("newClass");
elementById.setAttribute("data-custom", "value");

// Creating new elements
let newElement = document.createElement("div");
newElement.textContent = "New Element";
document.body.appendChild(newElement);

// Removing elements
document.body.removeChild(newElement);

// 3. Events
console.log("\n3. Events:");

// The "document" object can be used to register and handle various document-related events.

// Examples:
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded");
});

document.addEventListener("click", (event) => {
    console.log("Clicked:", event.target);
});

// 4. Forms
console.log("\n4. Forms:");

// The "document" object provides methods for accessing and interacting with HTML forms.

// Examples:
let formElement = document.getElementById("myForm");
console.log("Form Element:", formElement);

let formData = new FormData(formElement);
console.log("Form Data:", formData);

// Accessing form controls
let inputElement = formElement.elements["myInput"];
console.log("Input Element:", inputElement);

// Submitting forms programmatically
// formElement.submit();

// Resetting forms
// formElement.reset();

// 5. Style Sheets
console.log("\n5. Style Sheets:");

// The "document" object provides access to the style sheets associated with the document.

// Examples:
let styleSheets = document.styleSheets;
console.log("Style Sheets:", styleSheets);

// Accessing rules within style sheets
let firstStyleSheet = styleSheets[0];
let cssRules = firstStyleSheet.cssRules;
console.log("CSS Rules:", cssRules);

// Note: Accessing style sheets and rules may be subject to cross-origin restrictions.

// 6. Location and Navigation
console.log("\n6. Location and Navigation:");

// The "document" object provides access to the location and navigation-related properties.

// Examples:
console.log("Current URL:", document.location.href);
console.log("Document Title:", document.title);

// Navigating to a new URL
// document.location.href = "https://example.com";

// Setting document title
// document.title = "New Title";

// 7. Visibility and Fullscreen
console.log("\n7. Visibility and Fullscreen:");

// The "document" object provides properties and methods for handling document visibility and fullscreen mode.

// Examples:
console.log("Is document hidden:", document.hidden);
console.log("Is document fullscreen:", document.fullscreenElement);

// Listening for visibility change events
document.addEventListener("visibilitychange", () => {
    console.log("Visibility changed:", document.visibilityState);
});

// Requesting fullscreen mode
// document.documentElement.requestFullscreen();

// Exiting fullscreen mode
// document.exitFullscreen();
