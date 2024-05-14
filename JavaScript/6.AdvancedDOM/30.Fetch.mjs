// fetch_api.mjs

// 1. Introduction to Fetch API
console.log("1. Introduction to Fetch API:");

// The Fetch API is a modern interface for fetching resources (such as JSON, text, HTML, or blobs) across the network. It provides a more powerful and flexible way to make HTTP requests compared to traditional XMLHttpRequest.

// 2. Making a Simple GET Request
console.log("\n2. Making a Simple GET Request:");

// The fetch() function is used to initiate a fetch request. It takes a URL as input and returns a Promise that resolves to the Response object representing the response to the request.

// Example:
fetch("https://api.example.com/data")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// This example demonstrates making a simple GET request to fetch data from an API and handling the response asynchronously.

// 3. Fetch Options and Configuration
console.log("\n3. Fetch Options and Configuration:");

// The fetch() function accepts a second parameter, an optional init object, which allows you to configure the request, such as specifying request headers, request method, request body, etc.

// Example:
const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "example", password: "password" }),
};

fetch("https://api.example.com/login", requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Login Response:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// In this example, we make a POST request to a login endpoint with JSON data in the request body.

// 4. Fetch Response Object
console.log("\n4. Fetch Response Object:");

// The Response object represents the response to a fetch request. It provides various methods and properties for working with the response data.

// Example:
fetch("https://api.example.com/data")
    .then((response) => {
        console.log("Status Code:", response.status);
        console.log("Status Text:", response.statusText);
        return response.json();
    })
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// In this example, we access the status code and status text of the response using the Response object.

// 5. Benefits and Use Cases
console.log("\n5. Benefits and Use Cases:");

// - The Fetch API provides a modern and standardized way to make HTTP requests in JavaScript.
// - It supports a wide range of features, including asynchronous requests, request and response headers, request methods, and more.
// - Fetch is widely used for fetching data from APIs, making AJAX requests, and handling network communication in web applications.

// Example:
// Fetching data from an API and rendering it on a web page
fetch("https://api.example.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        // Render posts on the web page
        renderPosts(posts);
    })
    .catch((error) => {
        console.error("Error fetching posts:", error);
    });

// The Fetch API is a versatile tool for interacting with web servers and fetching data dynamically in web applications.
