"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "Harry",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
const recordAssignment = (assign) => {
    return (assign);
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
const hexColorMap = {
    red: "#012222",
    green: "#012222",
    blue: "#012222",
};
const finalLetterGrades = {
    Sara: "A",
    Kelly: "C",
};
const gradeData = {
    Sara: { assign1: 80, assign2: 90 },
    Kelly: { assign1: 80, assign2: 90 }
};
const score = {
    studentId: "k123",
    grade: 85
};
const previewAssign = {
    title: "Final Project"
};
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => console.log(err.message));
    return data;
});
fetchUsers().then(users => console.log(users));
//# sourceMappingURL=utility.js.map