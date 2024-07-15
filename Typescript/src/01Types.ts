// Basic Types
let isDone: boolean = false
let age: number = 32
let userName: string = 'John Doe'

// let name  has string type but const has type of 'Ansh'
let name = 'Ansh Roshan'
const myname: 'Ansh' = 'Ansh'

type UserRole = 'guest' | 'member' | 'admin'
let visitors: UserRole = 'admin'

// Arrays
let list: number[] = [1, 2, 3]
let genericList: Array<number> = [4, 5, 6]

// Tuples
let tuple: [string, number, boolean]
tuple = ['hello', 10, true] // OK

// Enums
enum Color {
    Red,
    Green,
    Blue,
}
let color: Color = Color.Green

// ---------------------------------------------------------------
// Any -- basically turn off the typescript
// Use case- when we turn js into ts, and dont have time to write type
// NOTE - NEVER USE THE ANY ,
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean

// Void --when the  function is not returning anything
function warnUser(): void {
    console.log('This is a warning message')
}

// Null and Undefined
let u: undefined = undefined
let n: null = null

// Never
function error(message: string): never {
    throw new Error(message)
}

// ---------------------------------------------------------------
// Object
declare function create(o: object | null): void
create({ prop: 0 }) // OK
create(null) // OK
