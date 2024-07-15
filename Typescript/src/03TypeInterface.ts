// ALWAYS USE TYPE ALIASES - it can declare everything
// interface can only describe object i.e {}
type Name = string
const name: Name = 'Ansh Roshan'

// I cannot do union  only in type .but not in Interface
type Address = string | string[]
const home: Address = 'Bhagalpur'
const tour: Address = ['Varanasi', 'Delhi', 'Kolkata']

//  Combining or combinig both can be done by
type Pizza = {
    name: string
    price: number
}
type Order = {
    pizza: Pizza
    status: string
    id: number
}
type CombiningType = Pizza & Order

//  Interface extends other interface or Type ,(multiple times too)
interface CombiningInterface extends Pizza, Order {}
interface CombiningInterface extends Pizza, Order {}

interface A {
    me: string
}

interface B {
    you: string
}
interface CombiningInterface extends A, B {}

// ---------------------------------------------------------------
//      TYPE CAN USE UTILITY FUNCTION BETTER LOOKING THAN INTERFACE
type Userprops = {
    name: string
    age: number
    created: Date
}

type Guestprops = Omit<Userprops, 'name' | 'age'>
interface IGuestprops extends Omit<Userprops, 'name' | 'age'> {}

// ---------------------------------------------------------------
//   Using Tuple is very simple in Type
type Marks = [number, string]
const history: Marks = [93, 'pass']

interface IMarks extends Array<number | string> {
    0: number
    1: string
}
const geopraphy: IMarks = [23, 'pass']

// ---------------------------------------------------------------
//      Extracting the type from something
const project = {
    title: ' Electrical ',
    specs: {
        techstack: ['java', 'springboot'],
        rooms: 5,
    },
}

type specs = typeof project.specs

// --------------------------------------------------------------
// -----				the use of as const
// --------------------------------------------------------------
const project1 = {
    title: ' Electrical ',
    specs: {
        techstack: ['java', 'springboot'],
        rooms: 5,
    } as const,
}

type specs1 = typeof project1.specs

// ---------------------------------------------------------------
//  Interface only ,to merge  the existing type or interface
interface User {
    name: string
    id: number
}

interface User {
    age: number
    salary?: number
}

// --  This will extend and merge both user
const human: User = {
    name: 'Omega Man',
    id: 12,
    age: 34,
}

console.log(human)
