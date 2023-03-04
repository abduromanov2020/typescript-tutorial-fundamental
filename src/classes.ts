class Coder {
    secLang!: string

    constructor(
        public name: string,
        public music: string,
        private age: number,
        protected lang: string = "Typescript",
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, My age is ${this.age}`
    }
}

const dave = new Coder("Dave", "Heaven", 27);

// console.log(dave.getAge())
// console.log(dave)

class webDave extends Coder {
    constructor(
        public computer: string,
        name: string,
        age: number,
        music: string
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `My Lang is ${this.lang}`
    }
}

const newDave = new webDave("Asus", "Dave", 27, "Music")
// console.log(newDave.getLang())

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Drummer implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    public play(action: string) {
        return `${this.name} ${action} ${this.instrument} `
    }
}

const page = new Drummer("Johny", "Drum")
// console.log(page.play("Bash"))


class Peeps {
    static count: number = 0

    static getCount() {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps("John")
const Daisy = new Peeps("Daisy")
const Jimmy = new Peeps("Jimmy")

// console.log(Peeps.count)

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of string')
    }
}

const myBands = new Bands()
myBands.data = ["Holy", "Grail"]
