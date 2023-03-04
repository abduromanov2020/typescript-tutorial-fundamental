interface transactionObj {
    readonly [index: string]: number
    Pizza: number
    Books: number
    Job: number
}

const transactionToday: transactionObj = {
    Pizza: 10,
    Books: 10,
    Job: 50
}

console.log(transactionToday["Pizza"])

interface Student {
    name: string
    GPA: number
    classes: number[]
}

const student: Student = {
    name: "doug",
    GPA: 3.98,
    classes: [100, 200]
}

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key} : ${student[key]}`)
}

logStudentKey(student, "classes")

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncome: Incomes = {
    salary: 500,
    bonus: 200,
    sidehustle: 100
}

for (const revenue in monthlyIncome) {
    console.log(revenue, monthlyIncome[revenue as keyof Incomes])
}