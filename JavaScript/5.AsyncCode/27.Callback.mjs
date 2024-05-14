// callbacks.mjs

// 1. Introduction to Callbacks
console.log("1. Introduction to Callbacks:");

// In JavaScript, a callback is a function that is passed as an argument to another function and is executed after a certain task has been completed or when a specific event occurs.

// 2. Passing and Using Callbacks
console.log("\n2. Passing and Using Callbacks:");

// Callbacks are commonly used in asynchronous programming, event handling, and higher-order functions.

// Example:
// Asynchronous callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched successfully";
        callback(data);
    }, 2000);
}

// Callback function
function processData(data) {
    console.log("Processing data:", data);
}

// Usage
fetchData(processData);

// In this example, the fetchData function simulates fetching data asynchronously and calls the processData callback function once the data is retrieved.

// 3. Callback Hell and Asynchronous Control Flow
console.log("\n3. Callback Hell and Asynchronous Control Flow:");

// Callback hell refers to the situation where multiple nested callbacks are used, leading to code that is difficult to read and maintain.

// Example:
// Nested callbacks
function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = "Data from API";
        callback(data);
    }, 2000);
}

function processAPIData(data, callback) {
    setTimeout(() => {
        const processedData = data.toUpperCase();
        callback(processedData);
    }, 2000);
}

function displayResult(result) {
    console.log("Result:", result);
}

// Usage
fetchDataFromAPI((data) => {
    processAPIData(data, (processedData) => {
        displayResult(processedData);
    });
});

// In this example, multiple nested callbacks are used to fetch data from an API, process it, and display the result.

// 4. Error Handling with Callbacks
console.log("\n4. Error Handling with Callbacks:");

// Callbacks can also be used for error handling by passing an additional argument to the callback function to indicate an error.

// Example:
function fetchDataWithErrorHandling(callback) {
    setTimeout(() => {
        const error = null; // Simulated error condition
        const data = "Data fetched successfully";
        callback(error, data);
    }, 2000);
}

// Usage
fetchDataWithErrorHandling((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

// In this example, the fetchDataWithErrorHandling function passes an error as the first argument to the callback if an error occurs during data retrieval.

// 5. Benefits and Use Cases
console.log("\n5. Benefits and Use Cases:");

// - Callbacks enable asynchronous programming and non-blocking behavior in JavaScript.
// - They are widely used in event handling, AJAX requests, timers, and more.
// - Callbacks provide a flexible and powerful way to handle asynchronous operations and control flow.

// Example:
// Event handling with callbacks
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button clicked");
});

// AJAX request with callbacks
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Callbacks are an integral part of JavaScript development, especially in scenarios involving asynchronous operations and event-driven programming.


// callback_hell.mjs

// 1. Introduction to Callback Hell
console.log("1. Introduction to Callback Hell:");

// Callback hell occurs when multiple asynchronous operations are nested within each other, leading to deeply nested callback functions.

// Example:
asyncOperation1(() => {
    asyncOperation2(() => {
        asyncOperation3(() => {
            // More nested callbacks...
        });
    });
});

// In this example, each asyncOperation depends on the result of the previous one, resulting in deeply nested callbacks.

// 2. Challenges of Callback Hell
console.log("\n2. Challenges of Callback Hell:");

// Callback hell makes code difficult to read, understand, and maintain. It can lead to issues such as:
// - Reduced readability and clarity
// - Increased complexity and cognitive load
// - Difficulty in error handling and debugging
// - Lack of modularity and reusability

// 3. Mitigating Callback Hell
console.log("\n3. Mitigating Callback Hell:");

// There are several strategies to mitigate callback hell and improve the readability and maintainability of asynchronous code:

// - Use named functions: Define named functions for callback operations to improve readability and promote modularity.
// - Use promises: Utilize promises and promise chaining to flatten the callback structure and handle asynchronous operations more cleanly.
// - Use async/await: Employ async functions and await keywords to write asynchronous code in a synchronous style, enhancing readability and reducing nesting.
// - Modularize code: Break down complex asynchronous operations into smaller, modular functions to reduce nesting and improve code organization.

// Example:
// Using promises to mitigate callback hell
asyncOperation1()
    .then(() => asyncOperation2())
    .then(() => asyncOperation3())
    .then(() => {
        // Code after all operations complete
    })
    .catch((error) => {
        // Error handling
        console.error("Error:", error);
    });

// Using async/await to mitigate callback hell
async function performOperations() {
    try {
        await asyncOperation1();
        await asyncOperation2();
        await asyncOperation3();
        // Code after all operations complete
    } catch (error) {
        // Error handling
        console.error("Error:", error);
    }
}

performOperations();

// By adopting these strategies, callback hell can be effectively mitigated, leading to cleaner, more maintainable asynchronous code.
