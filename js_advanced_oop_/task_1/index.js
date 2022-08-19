class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

const Worker = new Person('zxc', 'clown');

console.log(`${Worker.name} | ${Worker.surname} `);