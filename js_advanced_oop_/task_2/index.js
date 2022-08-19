class Person {
    constructor(name, surname) {
        this.surname = surname;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    get getSurname() {
        return this.surname
    }
    set changeSurname(value) {
        this.surname = value;
    }



}


const worker = new Person('Иван', 'Ivanov');
console.log(worker.getName) //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
worker.changeSurname = 'Petrov';
console.log(worker.getSurname); //выведет 'Петров'
