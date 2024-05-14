// event_delegation.mjs

// 1. Introduction to Event Delegation
console.log("1. Introduction to Event Delegation:");

// Event Delegation is a technique in JavaScript where instead of attaching event listeners to individual elements, you attach a single event listener to a parent element. This allows you to handle events for multiple child elements with a single event handler.

// 2. How Event Delegation Works
console.log("\n2. How Event Delegation Works:");

// When an event occurs on a child element, it bubbles up to its parent element and triggers any event listeners attached to it. Event delegation takes advantage of this bubbling behavior to handle events on multiple child elements using a single event listener on the parent element.

// Example:
// HTML structure
/*
<div id="parent">
  <button class="child">Button 1</button>
  <button class="child">Button 2</button>
  <button class="child">Button 3</button>
</div>
*/

// JavaScript
const parent = document.getElementById("parent");

parent.addEventListener("click", (event) => {
    if (event.target.classList.contains("child")) {
        console.log("Button clicked:", event.target.textContent);
    }
});

// In this example, we attach a click event listener to the parent element. When a button inside the parent is clicked, the event bubbles up to the parent, and the event listener checks if the clicked element has the "child" class before handling the event.

// 3. Benefits of Event Delegation
console.log("\n3. Benefits of Event Delegation:");

// - Simplifies event handling: Event delegation reduces the need for attaching event listeners to individual elements, resulting in cleaner and more concise code.
// - Dynamic element handling: Event delegation works well with dynamically created or removed elements since the event listener is attached to a parent element that persists in the DOM.
// - Performance optimization: By attaching a single event listener to a parent element, you minimize the number of event handlers and improve performance, especially in cases with a large number of elements.

// Example:
// Dynamic element handling with event delegation
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.textContent = "New Button";
    newButton.classList.add("child");
    parent.appendChild(newButton);
});

// In this example, we dynamically add new buttons to the parent element. Since the event listener is attached to the parent using event delegation, the new buttons automatically inherit the click behavior without needing additional event listeners.

// Event delegation is a powerful technique in JavaScript for handling events efficiently, especially in scenarios with dynamic content or a large number of elements.
