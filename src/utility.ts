interface Assigment {
    studentId: string
    title: string
    grade: number
    verified?: boolean
}

const updateAssignment = (assign: Assigment, propsToUpdate: Partial<Assigment>): Assigment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assigment = {
    studentId: "Harry",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 95 }))

const assignGraded = updateAssignment(assign1, { grade: 95 })

const recordAssignment = (assign: Required<Assigment>): Assigment => {
    return (assign)
}

const assignVerified: Readonly<Assigment> = { ...assignGraded, verified: true }

recordAssignment({ ...assignGraded, verified: true })

const hexColorMap: Record<string, string> = {
    red: "#012222",
    green: "#012222",
    blue: "#012222",
}

type Students = "Kelly" | "Sara"
type LetterGrades = "A" | "B" | "C" | "D" | "E"

const finalLetterGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "C",
}

interface Grades {
    assign1: number
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 80, assign2: 90 },
    Kelly: { assign1: 80, assign2: 90 }
}

type AssignResult = Pick<Assigment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
}

type AssignPreview = Omit<Assigment, "studentId" | "grade">

const previewAssign: AssignPreview = {
    title: "Final Project"
}

interface User {
    id: number
    name: string
    username: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => console.log(err.message))

    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))