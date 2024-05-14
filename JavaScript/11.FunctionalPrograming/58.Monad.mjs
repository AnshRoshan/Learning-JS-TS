// monads.mjs

// 1. Introduction to Monads
console.log("1. Introduction to Monads:");

// Monads are a design pattern in functional programming that encapsulates values and provides operations for composing functions that work with those values. They provide a structured way to manage side effects, handle errors, and sequence computations.

// 2. Example of a Monad: Maybe Monad
console.log("\n2. Example of a Monad: Maybe Monad:");

// The Maybe monad encapsulates a value that may be absent (null or undefined) and provides operations for safely working with the value.

// Example:
class Maybe {
    constructor(value) {
        this.value = value;
    }

    static of(value) {
        return new Maybe(value);
    }

    map(fn) {
        return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
    }

    flatMap(fn) {
        return this.value ? fn(this.value) : Maybe.of(null);
    }
}

// Usage:
const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

const getUserCity = (user) => Maybe.of(user)
    .flatMap(user => user.address)
    .flatMap(address => address.city)
    .map(city => city.toUpperCase())
    .value;

console.log("User City:", getUserCity(user)); // Output: User City: NEW YORK

// 3. Benefits of Monads
console.log("\n3. Benefits of Monads:");

// - Encapsulation: Monads encapsulate values and operations, providing a structured way to handle side effects and errors.
// - Composition: Monads support composition of functions, enabling complex computations to be built from simpler ones.
// - Predictable Behavior: Monads enforce rules for handling null or undefined values, leading to more predictable code behavior.

// Monads are a powerful tool in functional programming for structuring and managing computations, providing a structured approach to handling side effects and errors.
