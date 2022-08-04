let Person = {
    name: `Person`,
    get firtstLetterFromName() {
        return this.name[0];
    },
    age: 123,
    get squareAge() {
        return this.age * this.age;
    },
    salary: 1542.33,
    get salaryNetto() {
        return this.salary * 0.87;
    },
    get phoneWithCountryCode() {
        return `+373-${this.contacts.phone}`
    },
    get personContacts() {
        return `My email: ${this.contacts.email} | My phone-number: ${this.contacts.phone}`
    },
    contacts: {
        phone: `112`,

        email: 'email@domain.com',

    },
    address: `Moldova`,
    get fullAdress() {
        return `Chishinau,Republic of ${this.address}`
    }
}
console.log(Person.firtstLetterFromName);
console.log(Person.squareAge);
console.log(Person.salaryNetto);
console.log(Person.phoneWithCountryCode);
console.log(Person.personContacts);
console.log(Person.fullAdress);

