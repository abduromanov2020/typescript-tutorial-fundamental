"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, My age is ${this.age}`;
    }
}
const dave = new Coder("Dave", "Heaven", 27);
class webDave extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `My Lang is ${this.lang}`;
    }
}
const newDave = new webDave("Asus", "Dave", 27, "Music");
class Drummer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument} `;
    }
}
const page = new Drummer("Johny", "Drum");
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Daisy = new Peeps("Daisy");
const Jimmy = new Peeps("Jimmy");
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const myBands = new Bands();
myBands.data = ["Holy", "Grail"];
//# sourceMappingURL=classes.js.map