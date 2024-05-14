// event_loop.mjs

// 1. Introduction to Event Loop
console.log("1. Introduction to Event Loop:");

// The Event Loop is a crucial part of JavaScript's concurrency model that allows asynchronous code to be executed in a non-blocking manner. It continuously checks the call stack and the callback queue, ensuring that asynchronous tasks are executed when the call stack is empty.

// 2. Call Stack
console.log("\n2. Call Stack:");

// The Call Stack is a data structure that tracks the execution of synchronous function calls in JavaScript. When a function is invoked, it is added to the top of the call stack. When the function completes, it is removed from the call stack.

// Example:
function foo() {
    console.log("Inside foo");
}

function bar() {
    console.log("Inside bar");
    foo();
}

bar();

// In this example, the functions foo() and bar() are added to the call stack in the order they are invoked and removed when they complete.

// 3. Callback Queue and Event Loop
console.log("\n3. Callback Queue and Event Loop:");

// The Callback Queue (also known as the Task Queue) holds asynchronous tasks and callbacks waiting to be executed. When an asynchronous task completes, its callback is pushed to the callback queue. The Event Loop continuously checks the call stack and the callback queue, pushing tasks from the queue to the call stack when the stack is empty.

// Example:
setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);

// In this example, the setTimeout function schedules the callback function to be executed after a delay of 1000 milliseconds. Once the delay elapses, the callback is pushed to the callback queue.

// 4. Microtask Queue
console.log("\n4. Microtask Queue:");

// The Microtask Queue (also known as the Job Queue) holds microtasks, which are tasks with higher priority than regular tasks in the callback queue. Microtasks are executed before regular tasks when the call stack is empty.

// Example:
Promise.resolve("Resolved Promise").then((result) => {
    console.log("Promise result:", result);
});

// In this example, the callback function passed to the then() method is a microtask, which is executed after the current task completes but before the next task from the callback queue is executed.

// 5. Uses and Benefits
console.log("\n5. Uses and Benefits:");

// - The Event Loop allows JavaScript to handle asynchronous operations efficiently without blocking the main thread.
// - It enables features like setTimeout, setInterval, Promises, and async/await to execute asynchronous code in a non-blocking manner.
// - Understanding the Event Loop is essential for writing scalable and responsive web applications, especially those with heavy asynchronous workloads.

// Example:
// Fetching data asynchronously and updating the UI
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
        // Update UI with fetched data
        updateUI(data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// In this example, the fetch function initiates an asynchronous HTTP request, and the subsequent promise chain updates the UI with the fetched data.

// By leveraging the Event Loop, JavaScript can handle asynchronous tasks efficiently, providing a smooth and responsive user experience in web applications.
