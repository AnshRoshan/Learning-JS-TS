/**
 * Demonstrates various TypeScript utility types including Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, Parameters, ReturnType, InstanceType, ThisType
 */

// Sample interface to use with utility types
interface User {
    id: number
    name: string
    email?: string // Optional property
    age?: number // Optional property
}

// Partial: Constructs a type with all properties of Type set to optional.
function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates }
}

let user1: User = { id: 1, name: 'Alice' }
let updatedUser = updateUser(user1, { name: 'Bob' })

console.log('Updated User:', updatedUser)

// Required: Constructs a type consisting of all properties of Type set to required.
type RequiredUser = Required<User>

let user2: RequiredUser = {
    id: 2,
    name: 'Charlie',
    email: 'charlie@example.com',
    age: 25,
}

// Readonly: Constructs a type with all properties of Type set to readonly.
type ReadonlyUser = Readonly<User>

let user3: ReadonlyUser = { id: 3, name: 'David', email: 'david@example.com' }

// user3.name = "Daniel"; // Error: Cannot assign to 'name' because it is a read-only property.

// Record: Constructs an object type whose property keys are Keys and whose property values are Type.
type UserRoles = 'admin' | 'user' | 'guest'
type UserRolePermissions = Record<UserRoles, string[]>

let permissions: UserRolePermissions = {
    admin: ['create', 'read', 'update', 'delete'],
    user: ['read'],
    guest: ['read'],
}

// Pick: Constructs a type by picking the set of properties Keys from Type.
type UserNameAndEmail = Pick<User, 'name' | 'email'>

let user4: UserNameAndEmail = { name: 'Eve', email: 'eve@example.com' }

// Omit: Constructs a type by picking all properties from Type and then removing Keys.
type UserWithoutEmail = Omit<User, 'email'>

let user5: UserWithoutEmail = { id: 4, name: 'Frank', age: 30 }

// Exclude: Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
type T0 = Exclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
type T1 = Exclude<string | number | (() => void), Function> // string | number

// Extract: Constructs a type by extracting from UnionType all union members that are assignable to ExtractedMembers.
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // "a"
type T3 = Extract<string | number | (() => void), Function> // () => void

// NonNullable: Constructs a type by excluding null and undefined from Type.
type T4 = NonNullable<string | number | undefined> // string | number
type T5 = NonNullable<string[] | null | undefined> // string[]

// Parameters: Constructs a tuple type from the types used in the parameters of a function type.
type FunctionType = (a: string, b: number) => void
type FunctionParams = Parameters<FunctionType> // [string, number]

// ReturnType: Constructs a type consisting of the return type of function Type.
type FunctionReturnType = ReturnType<() => string> // string

// InstanceType: Constructs a type consisting of the instance type of a constructor function Type.
class ExampleClass {
    x = 0
    y = 0
}

type ExampleInstanceType = InstanceType<typeof ExampleClass> // ExampleClass

// ThisType: Marker for contextual 'this' type assignments in object literals and classes.
type ObjectDescriptor<D, M> = {
    data?: D
    methods?: M & ThisType<D & M> // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {}
    let methods: object = desc.methods || {}
    return { ...data, ...methods } as D & M
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx // Strongly typed this
            this.y += dy // Strongly typed this
        },
    },
})

obj.moveBy(5, 5)
console.log(`Moved to x: ${obj.x}, y: ${obj.y}`)
