let person = JSON.parse(`{
    "name": "Bibib Nurmagomedov Alexei",
    "personalInfo": {
      "gender": "M",
      "bDayDate": "12-24-2000",
      "IDNP": "2000500014156",
      "birthPlace": "Balti",
      "adress": "Chishinau Moldova,Republic of"
    },
    "contacts": {
      "phone": "071234567",
      "e-mail": "username@somemail.com",
      "homePhone": "023122222"
    },
    "Work": {
      "Salary": "$777",
      "Department": "Front-end engineer",
      "workExpirience(years)": 3,
      "workSchedule": "from 8:00 to 17:00 (dinner 12-13:00)"
    }
  }`)
function autoAppend(parent, obj) {
    for (let key in obj) {
        let par = document.createElement('p');
        par.textContent = `${key}:   ${obj[key]}`;
        parent.appendChild(par);
    }
}
console.log(person);
function showPerson(myObj) {
    let Section = document.getElementById('content');
    let myName = document.createElement('h3');

    myName.textContent = `Name : ${myObj['name']}`;
    
    let personalInfo = document.createElement('div');
    autoAppend(personalInfo, myObj['personalInfo'])

    let myContacts = document.createElement('div');
    autoAppend(myContacts, myObj['contacts']);
    
    let workInfo = document.createElement('div');
    autoAppend(workInfo, myObj['Work']);

    Section.appendChild(myName);
    Section.appendChild(personalInfo);
    Section.appendChild(myContacts);
    Section.appendChild(workInfo);



}
showPerson(person);
//https://jsoneditoronline.org/#left=cloud.33f8ad701b894ad5b5e410296a9f9e0b