type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string
    active: boolean
    album: stringOrNumberArray
}

// Literal Types
let myName: "amy" | "dave" | "john"

myName = "amy"

// Function
function add(a: number, b: number) {
    return a + b
}

function logMsg(message: any): void {
    console.log(message)
}

type mathFunction = (a: number, b: number) => number

let substract: mathFunction = (a, b) => {
    return a - b
}

let multiply: mathFunction = (a, b) => {
    return a * b
}

let sumAll = (a: number = 10, b: number, c: number): number => {
    return a + b + c
}

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    return c === "add" ? a + b : "" + a + b
}

let myVal: string = addOrConcat(2, 3, "add") as string
let myVal2: number = addOrConcat(2, 3, "concat") as number
