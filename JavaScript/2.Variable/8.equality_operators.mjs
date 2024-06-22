// equality_operators.mjs

// 1. Loose Equality (==) vs Strict Equality (===)
console.log('Loose Equality (==) vs Strict Equality (===):')

// Loose equality (==) allows type coercion
console.log('Loose Equality:')
console.log(5 == '5') // Output: true

// Strict equality (===) does not allow type coercion
console.log('Strict Equality:')
console.log(5 === '5') // Output: false

// 2. Use Cases and Differences
console.log('\nUse Cases and Differences:')

// Example 1: Checking for equality without type coercion
const num = 5
const str = '5'

console.log('Checking for equality without type coercion:')
console.log(num == str) // Output: true (Loose equality coerces types)
console.log(num === str) // Output: false (Strict equality does not coerce types)

// Example 2: Checking for equality with type coercion
const value = 0
const emptyString = ''

console.log('\nChecking for equality with type coercion:')
console.log(value == emptyString) // Output: true (Loose equality coerces types)
console.log(value === emptyString) // Output: false (Strict equality does not coerce types)

// Example 3: Checking for equality with null and undefined
const nullValue = null
const undefinedValue = undefined

console.log('\nChecking for equality with null and undefined:')
console.log(nullValue == undefinedValue) // Output: true (Loose equality coerces null and undefined to be equal)
console.log(nullValue === undefinedValue) // Output: false (Strict equality does not coerce null and undefined to be equal)

// Example 4: Checking for equality with objects
const obj1 = { name: 'John' }
const obj2 = { name: 'John' }
const obj3 = obj1

console.log('\nChecking for equality with objects:')
console.log(obj1 == obj2) // Output: false (Loose equality checks reference, not content)
console.log(obj1 === obj2) // Output: false (Strict equality checks reference, not content)
console.log(obj1 === obj3) // Output: true (Both reference the same object)

// Example 5: Checking for equality with arrays
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
const arr3 = arr1

console.log('\nChecking for equality with arrays:')
console.log(arr1 == arr2) // Output: false (Loose equality checks reference, not content)
console.log(arr1 === arr2) // Output: false (Strict equality checks reference, not content)
console.log(arr1 === arr3) // Output: true (Both reference the same array)
