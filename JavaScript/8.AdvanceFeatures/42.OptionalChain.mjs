// optional_chaining.mjs

// 1. Introduction to Optional Chaining Operator
console.log("1. Introduction to Optional Chaining Operator:");

// The Optional Chaining Operator (?.) is a feature introduced in JavaScript to simplify accessing nested properties of objects when there's a possibility of encountering null or undefined values along the property chain.

// 2. Optional Chaining Operator Syntax
console.log("\n2. Optional Chaining Operator Syntax:");

// The syntax for the Optional Chaining Operator is a question mark followed by a period (?.). It allows you to safely access nested properties without causing errors if intermediate properties are null or undefined.

// Example:
const user = {
    name: "John",
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

const city = user.address?.city;
console.log("City:", city); // Output: City: New York

// If any intermediate property along the chain is null or undefined, the result will be undefined, and no error will be thrown.

// Example:
const country = user.address?.country;
console.log("Country:", country); // Output: Country: undefined

// 3. Optional Chaining with Function Calls
console.log("\n3. Optional Chaining with Function Calls:");

// The Optional Chaining Operator can also be used with function calls to safely invoke methods on objects that may be null or undefined.

// Example:
const user0 = {
    name: "John",
    getAddress() {
        return this.address?.city ?? "No address available";
    }
};

console.log("User's Address:", user0.getAddress()); // Output: User's Address: No address available

// 4. Use Cases of Optional Chaining Operator
console.log("\n4. Use Cases of Optional Chaining Operator:");

// - Safely accessing nested properties in objects
// - Calling methods on objects that may be null or undefined

// Example:
// Safely accessing nested properties in objects
const product = {
    name: "Laptop",
    details: {
        brand: "Dell",
        specs: {
            memory: "16GB",
            storage: "512GB SSD"
        }
    }
};

const storageCapacity = product.details.specs?.storage;
console.log("Storage Capacity:", storageCapacity); // Output: Storage Capacity: 512GB SSD

// Calling methods on objects that may be null or undefined
const user1 = getUserById(userId);
const isAdmin = user1?.isAdmin();
console.log("Is Admin:", isAdmin); // Output: Is Admin: undefined (if user is null or undefined)

// The Optional Chaining Operator provides a safe and concise way to navigate through nested properties and function calls in JavaScript, reducing the risk of runtime errors and improving code robustness.
