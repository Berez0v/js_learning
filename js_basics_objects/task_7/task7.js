let Person = {
    name: `Person`,
    get firtstLetterFromName (){
        return this.name[0];
    },
    age: 123,
    get square_Age() {
        return this.age * this.age;
    },
    salary: 1542.33,
    get salaryNetto() {
        return this.salary * 0.87;
    },
    contacts: {
        phone: `112`,
        get phoneWithCountryCode() { 
          return `+373-${this.phone}`
        },
        email: 'email@domain.com',
        get personContacts () {
            return `My email: ${this.email} | My phone-number: ${this.phone}`
        }
    },
    address: `Moldova`,
    get fullAdress(){
        return `Chishinau,Republic of ${this.address}`
    }
}
console.log(Person.firtstLetterFromName);
console.log(Person.square_Age);
console.log(Person.salaryNetto);
console.log(Person.contacts.phoneWithCountryCode);
console.log(Person.contacts.personContacts);
console.log(Person.fullAdress);

