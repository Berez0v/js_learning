let Person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: 'email@domain.com'
    },
    address: `Moldova`
}

Person.contacts.phone ="+37312345678";
delete Person.address;
console.log(Person);