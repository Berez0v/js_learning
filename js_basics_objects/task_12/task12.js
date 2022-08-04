
function displayName(fName,lName,company) {
console.log(`Name:${fName} ${lName},Company:${company}`);
}

const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
}

let {first,last,company} = person;
console.log(first);
displayName(first,last,company);