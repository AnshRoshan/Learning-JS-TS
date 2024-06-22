// async_await.mjs

import fs from 'fs/promises'
import path from 'path'

// 1. Introduction to Async/Await
console.log('1. Introduction to Async/Await:')

// Async/await is a modern JavaScript feature that allows you to write asynchronous code in a synchronous style, making asynchronous operations easier to read and understand.

// 2. The async Function
console.log('\n2. The async Function:')

// The async keyword is used to define an asynchronous function, which returns a Promise. Inside an async function, you can use the await keyword to pause execution and wait for a Promise to resolve.

// Example:
async function fetchData() {
  const response = await fetch('https://api.example.com/data')
  const data = await response.json()
  return data
}

// 3. The await Keyword
console.log('\n3. The await Keyword:')

// The await keyword is used inside async functions to wait for a Promise to resolve. It pauses the execution of the async function until the Promise is settled (resolved or rejected), and then resumes the execution with the result.

// Example:
async function example() {
  const result = await someAsyncOperation()
  console.log('Result:', result)
}

// 4. Handling Errors with try...catch
console.log('\n4. Handling Errors with try...catch:')

// You can use try...catch blocks to handle errors in async/await functions. If an error occurs during the execution of an async function, it will be caught and can be handled gracefully.

// Example:
async function fetchDataWithRetry(url, maxRetries) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  throw new Error('Failed to fetch data after max retries')
}

// 5. Benefits and Use Cases
console.log('\n5. Benefits and Use Cases:')

// - Async/await simplifies asynchronous code by allowing you to write it in a synchronous style.
// - It improves code readability and maintainability, making it easier to understand asynchronous control flow.
// - Async/await is well-suited for handling multiple asynchronous operations sequentially or concurrently, error handling, and more.

// Example:
// Sequential execution of asynchronous operations
async function fetchDataAndProcess() {
  const data = await fetchData()
  const processedData = process(data)
  return processedData
}

// Concurrent execution of asynchronous operations using Promise.all()
async function fetchDataConcurrently() {
  const [data1, data2, data3] = await Promise.all([
    fetch('https://api.example.com/data1').then((response) => response.json()),
    fetch('https://api.example.com/data2').then((response) => response.json()),
    fetch('https://api.example.com/data3').then((response) => response.json()),
  ])
  return [data1, data2, data3]
}

// Async/await is a powerful feature that simplifies asynchronous programming in JavaScript, providing cleaner and more maintainable code.

// 6. using async wait with promises
console.log('\n6. using async wait with promises:')

// You can use async/await with Promise-based functions to simplify asynchronous code. When you await a Promise, it automatically handles the resolution or rejection of the Promise.

// Example:

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully')
    }, 2000)
  })
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data processed successfully')
    }, 2000)
  })
}

async function fetchDataAndProcess1() {
  const data = await fetchData1()
  const processedData = await processData(data)
  console.log(processedData)
}

fetchDataAndProcess1()

// Example -with nested Promises and async/await:

// In this example, the fetchDataAsync function uses async/await with a Promise-based fetchData function. The await keyword pauses the execution until the Promise is resolved, making the code cleaner and easier to read.

// top_level_await.mjs

// 1. Introduction to Top-Level Await
console.log('1. Introduction to Top-Level Await:')

// Top-level await allows using the `await` keyword at the top level of an ES module.
// This can simplify code by removing the need for an `async` function to handle asynchronous operations at the module level.

// 2. Example of Top-Level Await with Fetch API
console.log('\n2. Example of Top-Level Await with Fetch API:')

try {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  console.log('Fetched data:', data)
} catch (error) {
  console.error('Error fetching data:', error)
}

// 3. Example of Top-Level Await with File Operations (Node.js)
console.log('\n3. Example of Top-Level Await with File Operations (Node.js):')

// Define the file path
const filePath = path.join(process.cwd(), 'example.txt')

try {
  // Write to a file
  await fs.writeFile(filePath, 'Hello, World with Top-Level Await!')
  console.log('File written with top-level await.')

  // Read from the file
  const fileData = await fs.readFile(filePath, 'utf8')
  console.log('File read with top-level await:', fileData)

  // Append to the file
  await fs.appendFile(filePath, '\nAppended text with top-level await.')
  console.log('File appended with top-level await.')

  // Read the updated file
  const updatedFileData = await fs.readFile(filePath, 'utf8')
  console.log('Updated file read with top-level await:', updatedFileData)

  // Delete the file
  await fs.unlink(filePath)
  console.log('File deleted with top-level await.')
} catch (error) {
  console.error('Error with file operations:', error)
}

// 4. Explanation

// Top-level await simplifies asynchronous code in modules by allowing `await` at the top level.
// It removes the need for wrapping asynchronous code in an `async` function when working with ES modules.

// This feature is particularly useful in:
// - Module initialization code that needs to wait for asynchronous operations.
// - Simplifying scripts that interact with APIs, databases, or file systems.
