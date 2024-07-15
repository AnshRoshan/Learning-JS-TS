// Classes
class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    bark(): void {
        console.log('Woof! Woof!')
    }
}

let dog = new Dog('Rex')
dog.bark()
dog.move(10)

// Generics
function identity<T>(arg: T): T {
    return arg
}

let output1 = identity<string>('myString')
let output2 = identity<number>(100)

// Generic Classes
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue
        this.add = add
    }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y)

// Type Assertions
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length

// Functions
function add(x: number, y: number): number {
    return x + y
}

let myAdd: (x: number, y: number) => number = function (x, y) {
    return x + y
}

// Function Types
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function (source, subString) {
    let result = source.search(subString)
    return result > -1
}

// Indexable Types
interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]

// Readonly properties
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }

// p1.x = 5; // Error

// ReadonlyArray
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

// ro[0] = 12; // Error
// ro.push(5); // Error
// ro.length = 100; // Error

a = ro as number[]

// Mapped Types
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

type Partial<T> = {
    [P in keyof T]?: T[P]
}

interface Todo {
    title: string
    description: string
}

type ReadonlyTodo = Readonly<Todo>
type PartialTodo = Partial<Todo>
