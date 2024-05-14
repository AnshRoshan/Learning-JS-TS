// async_await.mjs

// 1. Introduction to Async/Await
console.log("1. Introduction to Async/Await:");

// Async/await is a modern JavaScript feature that allows you to write asynchronous code in a synchronous style, making asynchronous operations easier to read and understand.

// 2. The async Function
console.log("\n2. The async Function:");

// The async keyword is used to define an asynchronous function, which returns a Promise. Inside an async function, you can use the await keyword to pause execution and wait for a Promise to resolve.

// Example:
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}

// 3. The await Keyword
console.log("\n3. The await Keyword:");

// The await keyword is used inside async functions to wait for a Promise to resolve. It pauses the execution of the async function until the Promise is settled (resolved or rejected), and then resumes the execution with the result.

// Example:
async function example() {
    const result = await someAsyncOperation();
    console.log("Result:", result);
}

// 4. Handling Errors with try...catch
console.log("\n4. Handling Errors with try...catch:");

// You can use try...catch blocks to handle errors in async/await functions. If an error occurs during the execution of an async function, it will be caught and can be handled gracefully.

// Example:
async function fetchDataWithRetry(url, maxRetries) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    throw new Error("Failed to fetch data after max retries");
}

// 5. Benefits and Use Cases
console.log("\n5. Benefits and Use Cases:");

// - Async/await simplifies asynchronous code by allowing you to write it in a synchronous style.
// - It improves code readability and maintainability, making it easier to understand asynchronous control flow.
// - Async/await is well-suited for handling multiple asynchronous operations sequentially or concurrently, error handling, and more.

// Example:
// Sequential execution of asynchronous operations
async function fetchDataAndProcess() {
    const data = await fetchData();
    const processedData = process(data);
    return processedData;
}

// Concurrent execution of asynchronous operations using Promise.all()
async function fetchDataConcurrently() {
    const [data1, data2, data3] = await Promise.all([
        fetch("https://api.example.com/data1").then((response) => response.json()),
        fetch("https://api.example.com/data2").then((response) => response.json()),
        fetch("https://api.example.com/data3").then((response) => response.json()),
    ]);
    return [data1, data2, data3];
}

// Async/await is a powerful feature that simplifies asynchronous programming in JavaScript, providing cleaner and more maintainable code.
