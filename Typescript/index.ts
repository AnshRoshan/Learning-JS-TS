// console.log("Hello via Bun!");

type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    pizza: Pizza
    status: 'Ordered' | 'Finished' | 'Pending'
    id: number
}

const menu: Pizza[] = [
    { name: 'cheese-pizza', price: 90, id: 1 },
    { name: 'Macroni-pizza', price: 29, id: 2 },
    { name: 'Nyc-pizza', price: 34, id: 3 },
]

let cashInregister = 1000

const orderQueue: Order[] = []

let orderID = 1

// function addNew(pizzaObj: Partial<Pizza>): void {
//     // forcing it back into Pizza removing optional from Partial
//     const newPizza = { ...pizzaObj, id: menu.length + 1 } as Pizza
//     menu.push(newPizza)
// }

function addNew(pizzaObj: Omit<Pizza, 'id'>): void {
    menu.push({ ...pizzaObj, id: menu.length + 1 })
}

function placeOrder(pizzaName: String): Order {
    const selectedpizza = menu.find((Object) => Object.name === pizzaName)
    if (!selectedpizza) {
        throw new Error(`${pizzaName} is not Present in the menu.`)
    }
    cashInregister += selectedpizza.price
    const newOrder: Order = {
        pizza: selectedpizza,
        status: 'Ordered',
        id: ++orderID,
    }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(id: number): Order {
    const selectOrder = orderQueue.find((obj) => obj.id === id)
    if (!selectOrder) {
        console.error(`${id} is not placed till now.`)
        throw new Error()
    }
    selectOrder.status = 'Finished'
    return selectOrder
}

// ---------------------------------------------------------------
// TYPE NARROWING :- occurs, first we handle string,
// then TypeScript just narrow it  down to the number
function getpizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === 'string') {
        return menu.find((obj) => obj.name === identifier)
    } else if (typeof identifier === 'number') {
        return menu.find((obj) => obj.id === identifier)
    } else {
        throw new Error(`${identifier} pizza is not avialable in the menu.`)
    }
}

addNew({ name: 'Ramen-Pizaa', price: 100 })
placeOrder('Nyc-pizza')
completeOrder(2)

console.log(menu)
console.log(orderQueue)
