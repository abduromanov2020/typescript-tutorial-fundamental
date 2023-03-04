"use strict";
const transactionToday = {
    Pizza: 10,
    Books: 10,
    Job: 50
};
console.log(transactionToday["Pizza"]);
const student = {
    name: "doug",
    GPA: 3.98,
    classes: [100, 200]
};
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "classes");
const monthlyIncome = {
    salary: 500,
    bonus: 200,
    sidehustle: 100
};
for (const revenue in monthlyIncome) {
    console.log(revenue, monthlyIncome[revenue]);
}
//# sourceMappingURL=indexsignature.js.map