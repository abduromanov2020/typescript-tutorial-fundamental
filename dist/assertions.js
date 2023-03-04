"use strict";
let myName;
myName = "amy";
function add(a, b) {
    return a + b;
}
function logMsg(message) {
    console.log(message);
}
let substract = (a, b) => {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
let sumAll = (a = 10, b, c) => {
    return a + b + c;
};
const addOrConcat = (a, b, c) => {
    return c === "add" ? a + b : "" + a + b;
};
let myVal = addOrConcat(2, 3, "add");
let myVal2 = addOrConcat(2, 3, "concat");
//# sourceMappingURL=assertions.js.map