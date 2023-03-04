interface checkBool<T> {
    value: T
    is: boolean
}

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

const isTrue = <T>(arg: T): checkBool<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T)) {
        return { value: arg, is: false }
    }
    return { value: arg, is: true }
}

console.log(isTrue({ name: "John" }))
console.log(isTrue({}))
console.log(isTrue([]))
console.log(isTrue(["John", "Johny"]))

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T) => {
    return user
}

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

