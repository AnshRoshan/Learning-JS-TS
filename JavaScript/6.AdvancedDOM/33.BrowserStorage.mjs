// browser_storage.mjs

// 1. Introduction to Browser Storage
console.log("1. Introduction to Browser Storage:");

// Browser Storage refers to the mechanisms provided by web browsers to store data locally on the user's device. There are two main types of browser storage: localStorage and sessionStorage.

// 2. localStorage
console.log("\n2. localStorage:");

// localStorage is a persistent storage mechanism that allows you to store key-value pairs locally on the user's device. Data stored in localStorage persists even after the browser is closed and reopened.

// Example:
// Set data in localStorage
localStorage.setItem("username", "example");

// Get data from localStorage
const username = localStorage.getItem("username");
console.log("Username:", username);

// Remove data from localStorage
localStorage.removeItem("username");

// Clear all data from localStorage
localStorage.clear();

// 3. sessionStorage
console.log("\n3. sessionStorage:");

// sessionStorage is similar to localStorage but stores data only for the duration of the browser session. Once the session ends (e.g., the browser is closed), sessionStorage data is cleared.

// Example:
// Set data in sessionStorage
sessionStorage.setItem("theme", "dark");

// Get data from sessionStorage
const theme = sessionStorage.getItem("theme");
console.log("Theme:", theme);

// Remove data from sessionStorage
sessionStorage.removeItem("theme");

// Clear all data from sessionStorage
sessionStorage.clear();

// 4. Using JSON with Browser Storage
console.log("\n4. Using JSON with Browser Storage:");

// Browser storage stores data as strings. To store complex data structures like arrays and objects, you can serialize them to JSON before storing and deserialize them when retrieving.

// Example:
const userData = { name: "John", age: 30, email: "john@example.com" };

// Serialize object to JSON and store in localStorage
localStorage.setItem("userData", JSON.stringify(userData));

// Deserialize JSON and retrieve object from localStorage
const storedUserData = JSON.parse(localStorage.getItem("userData"));
console.log("Stored User Data:", storedUserData);

// 5. Security Considerations
console.log("\n5. Security Considerations:");

// - Browser storage is domain-specific and accessible only to web pages from the same origin (protocol, domain, and port).
// - Data stored in browser storage is not encrypted and can be accessed by JavaScript running in the same context. Avoid storing sensitive information such as passwords or authentication tokens.
// - Be mindful of storage limits (e.g., 5 MB per domain for localStorage) and avoid storing excessive data in browser storage.

// Example:
// Store sensitive data securely using encrypted cookies or server-side storage mechanisms instead of browser storage.

// Browser storage is a powerful feature in web development for storing user preferences, session data, and application state locally on the user's device.
