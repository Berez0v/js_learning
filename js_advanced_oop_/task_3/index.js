class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    get getSalary() {
        return this.rate * this.days;
    }

}


const valera = new Worker("Valera", "zxc", 10, 31);
const vasyan = new Worker("Vasea", "Petrov", 20, 21);


console.log(valera.name);
console.log(valera.surname);
 console.log(valera.rate);
console.log(valera.days);
console.log(valera.getSalary); 

console.log(valera.getSalary+vasyan.getSalary);