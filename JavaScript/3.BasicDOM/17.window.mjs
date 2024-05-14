// window_object.mjs

// 1. Accessing Properties and Methods
console.log("1. Accessing Properties and Methods:");

// The "window" object represents the global window in the browser environment.
// It contains properties and methods that provide access to various browser functionalities.

// Examples:
console.log("Window width:", window.innerWidth); // Returns the width of the browser window
console.log("Window height:", window.innerHeight); // Returns the height of the browser window

// 2. DOM Manipulation
console.log("\n2. DOM Manipulation:");

// The "window" object provides access to the Document Object Model (DOM) of the web page.
// It allows manipulation of HTML elements, styles, events, etc.

// Examples:
// Accessing elements by ID
let elementById = window.document.getElementById("myElement");

// Accessing elements by class name
let elementsByClassName = window.document.getElementsByClassName("myClass");

// Accessing elements by tag name
let elementsByTagName = window.document.getElementsByTagName("div");

// Creating new elements
let newElement = window.document.createElement("div");

// Adding event listeners
window.addEventListener("load", () => {
    console.log("Page loaded");
});

// 3. Timers and Intervals
console.log("\n3. Timers and Intervals:");

// The "window" object provides methods for scheduling timers and intervals.

// Examples:
// setTimeout(): Executes a function once after a specified delay (in milliseconds)
window.setTimeout(() => {
    console.log("Timeout function executed");
}, 2000); // Executes after 2 seconds

// setInterval(): Executes a function repeatedly at specified intervals (in milliseconds)
let intervalId = window.setInterval(() => {
    console.log("Interval function executed");
}, 3000); // Executes every 3 seconds

// Clearing timers and intervals
// window.clearTimeout(timeoutId);
// window.clearInterval(intervalId);

// 4. Navigation and Location
console.log("\n4. Navigation and Location:");

// The "window" object provides properties and methods related to navigation and location.

// Examples:
console.log("Current URL:", window.location.href); // Returns the URL of the current page
console.log("Protocol:", window.location.protocol); // Returns the protocol of the current URL (e.g., "https:")
console.log("Hostname:", window.location.hostname); // Returns the hostname of the current URL (e.g., "example.com")
console.log("Pathname:", window.location.pathname); // Returns the pathname of the current URL (e.g., "/path/to/page")
console.log("Search:", window.location.search); // Returns the query string of the current URL (e.g., "?param=value")
console.log("Hash:", window.location.hash); // Returns the fragment identifier of the current URL (e.g., "#section")

// Navigating to a new URL
// window.location.href = "https://example.com";

// 5. Storage
console.log("\n5. Storage:");

// The "window" object provides access to browser storage mechanisms such as localStorage and sessionStorage.

// Examples:
// localStorage.setItem("key", "value");
// let storedValue = localStorage.getItem("key");
// localStorage.removeItem("key");
// localStorage.clear();

// sessionStorage.setItem("key", "value");
// let storedValue = sessionStorage.getItem("key");
// sessionStorage.removeItem("key");
// sessionStorage.clear();

// Note: localStorage stores data with no expiration date, while sessionStorage stores data for the duration of the page session.

// 6. Opening Windows and Dialogs
console.log("\n6. Opening Windows and Dialogs:");

// The "window" object provides methods for opening new browser windows and dialogs.

// Examples:
// window.open("https://example.com", "windowName", "width=400,height=300");
// window.alert("This is an alert message");
// window.confirm("Are you sure?");
// window.prompt("Enter your name:");

// Note: Usage of pop-up windows and dialogs may be restricted by browser settings or pop-up blockers.

// 7. History
console.log("\n7. History:");

// The "window" object provides access to the browsing history of the window.

// Examples:
// window.history.back(); // Go back one page in the browsing history
// window.history.forward(); // Go forward one page in the browsing history
// window.history.go(-2); // Go back two pages in the browsing history

// Note: Manipulating the browsing history programmatically can affect the user experience and is subject to browser restrictions.

// 8. Screen
console.log("\n8. Screen:");

// The "window" object provides access to information about the user's screen.

// Examples:
console.log("Screen width:", window.screen.width); // Returns the width of the screen in pixels
console.log("Screen height:", window.screen.height); // Returns the height of the screen in pixels
console.log("Screen orientation:", window.screen.orientation.type); // Returns the orientation of the screen ("portrait-primary", "landscape-secondary", etc.)

// 9. Events
console.log("\n9. Events:");

// The "window" object can be used to register and handle various browser events.

// Examples:
window.addEventListener("resize", () => {
    console.log("Window resized");
});

window.addEventListener("scroll", () => {
    console.log("Window scrolled");
});

// Note: There are many other events that can be handled using the "window" object, such as load, unload, focus, blur, etc.
