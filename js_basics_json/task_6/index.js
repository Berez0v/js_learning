let person = JSON.parse(`[
    {
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
    },
    {
      "name": "2k mmr enjoyer",
      "personalInfo": {
        "gender": "M",
        "bDayDate": "12-24-2004",
        "IDNP": "20005000143443",
        "birthPlace": "Cantemir",
        "adress": "Tiraspol Moldova,Republic of"
      },
      "contacts": {
        "phone": "07123452332",
        "e-mail": "username2@somemail.com",
        "homePhone": "02312232222"
      },
      "Work": {
        "Salary": "$1777",
        "Department": "Back-End engineer",
        "workExpirience(years)": 5,
        "workSchedule": "from 9:00 to 18:00 (dinner 12-13:00)"
      }
    },
    {
      "name": "Alex Onoiko Ion",
      "personalInfo": {
        "gender": "M",
        "bDayDate": "10-28-1999",
        "IDNP": "2000500014156",
        "birthPlace": "Singerei",
        "adress": "Chishinau Moldova,Republic of"
      },
      "contacts": {
        "phone": "073412345672",
        "e-mail": "www_username@somemail.com",
        "homePhone": "0231222212"
      },
      "Work": {
        "Salary": "$2777",
        "Department": "Full-stack engineer",
        "workExpirience(years)": 2,
        "workSchedule": "from 10:00 to 19:00 (dinner 14-15:00)"
      }
    }
  ]`)

console.log(person);

function autoAppend(parent, obj) {
    for (let key in obj) {
        let par = document.createElement('p');
        par.textContent = `${key}:   ${obj[key]}`;
        parent.appendChild(par);
    }
}
function showPerson(myObj) {
    let body = document.getElementById('myList')
    let Section = document.createElement('section');
    let myName = document.createElement('h3');

    myName.textContent = `Name : ${myObj['name']}`;

    let personalInfo = document.createElement('div');
    autoAppend(personalInfo, myObj['personalInfo'])

    let myContacts = document.createElement('div');
    autoAppend(myContacts, myObj['contacts']);

    let workInfo = document.createElement('div');
    autoAppend(workInfo, myObj['Work']);
    body.appendChild(Section);
    Section.appendChild(myName);
    Section.appendChild(personalInfo);
    Section.appendChild(myContacts);
    Section.appendChild(workInfo);
}

function extractCurrencyValue(str) {
    value = "";
    for (let i = 0; i < str.length; i++)
        if (!isNaN(str[i])) {
            value += str[i];
        }
    return parseInt(value);
}

function showAllSalaries(arrayOfObj) {
    let body = document.getElementById('myList')
    let Section = document.createElement('section');
    body.appendChild(Section);
    let article = document.createElement('h3');
    article.textContent = 'Info about salaries';
    Section.appendChild(article);
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    arrayOfObj.forEach(element => {
        let paragraph = document.createElement('p');
        paragraph.textContent = `Name: ${element['name']} | Salary : ${element['Work']['Salary']}`;
        let salaryInNumber = extractCurrencyValue(element['Work']['Salary']);
        sum += salaryInNumber;
        if (salaryInNumber < min) {
            min = salaryInNumber;
        }
        if (salaryInNumber > max) {
            max = salaryInNumber;
        }

        Section.appendChild(paragraph);
    })

    let newParagraph = document.createElement('p');
    newParagraph.textContent = ` Average Salary : $${sum / (person.length)}
    | minimal Salary $${min} | max Salary $${max} | sum of all salaries $${sum}`
    Section.appendChild(newParagraph);
}
person.forEach(element => {
    showPerson(element);
});
showAllSalaries(person);