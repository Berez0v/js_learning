class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse() {
        let studentCourse = (new Date()).getFullYear() - this.year;
        if (studentCourse >= 1) {
            return studentCourse;
        } else if (!studentCourse) {
            return 1;
        }
        return 'Please enter correct year!';
    }
}

const testStudent = new Student('Ivan', "Ivanow", 2020);
console.log(testStudent);
console.log(testStudent.name);
console.log(testStudent.surname);
console.log(testStudent.getFullName());
console.log(testStudent.year);
console.log(testStudent.getCourse());