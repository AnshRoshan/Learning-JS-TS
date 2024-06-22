// file_operations.mjs

import fs from 'fs'
import { promises as fsPromises } from 'fs'
import path from 'path'

// File paths
const filePath = path.join(process.cwd(), 'example.txt')

// Utility function to display a divider
const divider = () => console.log('='.repeat(40))

// 1. Synchronous File Operations
console.log('1. Synchronous File Operations:')
divider()

// Synchronous write
fs.writeFileSync(filePath, 'Hello, World!')
console.log('File written synchronously.')

// Synchronous read
const dataSync = fs.readFileSync(filePath, 'utf8')
console.log('File read synchronously:', dataSync)

// Synchronous append
fs.appendFileSync(filePath, '\nAppended text.')
console.log('File appended synchronously.')

// Synchronous delete
fs.unlinkSync(filePath)
console.log('File deleted synchronously.')
divider()

// 2. Asynchronous File Operations with Callbacks
console.log('2. Asynchronous File Operations with Callbacks:')
divider()

// Asynchronous write
fs.writeFile(filePath, 'Hello, World!', (err) => {
  if (err) throw err
  console.log('File written asynchronously.')

  // Asynchronous read
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err
    console.log('File read asynchronously:', data)

    // Asynchronous append
    fs.appendFile(filePath, '\nAppended text.', (err) => {
      if (err) throw err
      console.log('File appended asynchronously.')

      // Asynchronous delete
      fs.unlink(filePath, (err) => {
        if (err) throw err
        console.log('File deleted asynchronously.')
        divider()
      })
    })
  })
})

// 3. Promise-based File Operations
console.log('3. Promise-based File Operations:')
divider()

// Promise-based write
fsPromises
  .writeFile(filePath, 'Hello, World!')
  .then(() => {
    console.log('File written with promise.')

    // Promise-based read
    return fsPromises.readFile(filePath, 'utf8')
  })
  .then((data) => {
    console.log('File read with promise:', data)

    // Promise-based append
    return fsPromises.appendFile(filePath, '\nAppended text.')
  })
  .then(() => {
    console.log('File appended with promise.')

    // Promise-based delete
    return fsPromises.unlink(filePath)
  })
  .then(() => {
    console.log('File deleted with promise.')
    divider()
  })
  .catch((err) => {
    console.error('Error with promise-based operations:', err)
  })

// Explanation:
// - Synchronous methods (`writeFileSync`, `readFileSync`, `appendFileSync`, `unlinkSync`) block the execution until the operation completes.
// - Asynchronous methods with callbacks (`writeFile`, `readFile`, `appendFile`, `unlink`) execute the operation and call the provided callback when done.
// - Promise-based methods (`fsPromises.writeFile`, `fsPromises.readFile`, `fsPromises.appendFile`, `fsPromises.unlink`) return promises, allowing for cleaner code with `.then()` and `.catch()`.

// These file operations provide flexibility in handling files in Node.js, supporting different use cases based on the need for blocking behavior, callback-based asynchrony, or promise-based workflows.
console.log('End of examples.')
