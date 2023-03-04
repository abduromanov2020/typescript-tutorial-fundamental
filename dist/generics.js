"use strict";
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg)) {
        return { value: arg, is: false };
    }
    return { value: arg, is: true };
};
console.log(isTrue({ name: "John" }));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(["John", "Johny"]));
const processUser = (user) => {
    return user;
};
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
//# sourceMappingURL=generics.js.map