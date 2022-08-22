class Validator {
    static isEmail(email) {
        return email.includes('@');
    }
    static isDate(inputDate) {
        return new Date(inputDate) instanceof Date && !isNaN((new Date(inputDate)).valueOf());
    }
    static isPhone(number) {
        let myRegex = /^((0373|\+373|3732|0)([0-9]){8})$/;
        return myRegex.test(number);

    }
    static isDomain(href) {

        return (href.startsWith('https://') || href.startsWith('http://'));

    }

}
console.log("email validation:")
console.log(Validator.isEmail('phphtml@mail.ru'));
console.log(Validator.isEmail('phphtmlmail.ru'));

console.log("Date validation:")
console.log(Validator.isDate('12.05.2020'));
console.log(Validator.isDate('13.05.20202'));
console.log(Validator.isDate('June'));
console.log("Domain validation:");

console.log(Validator.isDomain('www.youtube.com/watch?v=yOIbvm48S4A'))
console.log(Validator.isDomain('https://www.youtube.com/watch?v=yOIbvm48S4A'))
console.log("Phone validation:")

console.log(Validator.isPhone('023135555'));
console.log(Validator.isPhone('723135555'));
console.log(Validator.isPhone('7dsf23135555'));
console.log(Validator.isPhone('037379900647'));
