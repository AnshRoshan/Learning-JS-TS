// event_listeners.mjs

// 1. Adding Event Listeners
console.log("1. Adding Event Listeners:");

// Event listeners are functions attached to elements that listen for specific events and execute code in response to those events.

// Example:
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button clicked");
});

// 2. Event Types
console.log("\n2. Event Types:");

// Events can be triggered by various user interactions or actions on elements.

// Examples of common event types:
// - click: Triggered when the element is clicked.
// - mouseover: Triggered when the mouse cursor enters the element.
// - mouseout: Triggered when the mouse cursor leaves the element.
// - keydown: Triggered when a key is pressed while the element has focus.
// - submit: Triggered when a form is submitted.

// 3. Event Propagation
console.log("\n3. Event Propagation:");

// Event propagation refers to the process of an event propagating through the DOM hierarchy.

// Example:
// If a click event occurs on an element, it will propagate through its ancestors (capturing phase) and then back down to the element (bubbling phase).
// Event propagation can be controlled using event.stopPropagation() and event.preventDefault() methods.

// 4. Event Handling
console.log("\n4. Event Handling:");

// Event handling involves writing functions to handle specific events.

// Example:
function handleClick(event) {
    console.log("Button clicked");
}

document.getElementById("myButton").addEventListener("click", handleClick);

// 5. Event Object
console.log("\n5. Event Object:");

// When an event is triggered, an event object is created and passed as an argument to the event handler function.

// Example:
function handleClick(event) {
    console.log("Button clicked");
    console.log("Event:", event);
}

document.getElementById("myButton").addEventListener("click", handleClick);

// 6. Removing Event Listeners
console.log("\n6. Removing Event Listeners:");

// Event listeners can be removed using the removeEventListener() method.

// Example:
function handleClick(event) {
    console.log("Button clicked");
}

let button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// Remove the event listener
// button.removeEventListener("click", handleClick);

// 7. Event Delegation
console.log("\n7. Event Delegation:");

// Event delegation involves attaching an event listener to a parent element to listen for events on its child elements.

// Example:
document.getElementById("parentElement").addEventListener("click", (event) => {
    if (event.target.matches("button")) {
        console.log("Button clicked");
    }
});

// 8. Best Practices
console.log("\n8. Best Practices:");

// - Use event listeners to handle user interactions and trigger actions.
// - Use event delegation for dynamically created elements or when handling multiple similar elements.
// - Remove event listeners when they are no longer needed to prevent memory leaks.
