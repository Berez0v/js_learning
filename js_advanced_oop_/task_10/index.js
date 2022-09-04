class FormElement {
    constructor(type, id, placeholder, value, rules) {
        this.element = document.createElement('input');
        this.element.type = type;
        this.element.id = id;
        this.element.placeholder = placeholder;
        this.element.value = value;
        this.element.rules = rules;
        document.querySelector('form').appendChild(this.element);
    }
    create() {
        //Next task
    }
    getValue() {
        return this.element.value;
    }
    validate() {
        const arrayOfRules = this.element.rules.split('|');
        let returnValue = true;
        arrayOfRules.forEach(rule => {
            if (rule === 'required') {
                if (!this.element.value) {
                    returnValue = false;

                }
            }
            if (rule === 'mail') {
                if (!this.element.value.includes('@')) {
                    returnValue = false;
                }


            }

            if (rule === 'date') {
                returnValue = new Date(this.element.value) instanceof Date && !isNaN((new Date(this.element.value)).valueOf());
            }
            if (rule.includes('min')) {
                let temp = rule.split(":");
                if (parseInt(this.element.value) < parseInt(temp[1])) {
                    returnValue = false;
                }
            }

        });
        return returnValue;
    }
}

// create form body

const form = document.createElement('form');
document.querySelector('body').appendChild(form);
let myArray = []; //array with form elements
myArray.push(new FormElement("text", "name", "NAME", "John", "required"));
myArray.push(new FormElement("text", "email", "E-mail", "mail@mail.com", "required|mail"));
myArray.push(new FormElement("text", "age", "Age", "9", "required|min:10"));
myArray.push(new FormElement("text", "birtDate", "Date of birth", "01.d01.1970", "required|date"));

//creating button
const button = document.createElement('div');
button.setAttribute('id', 'submit');
button.innerText = 'Submit';
form.appendChild(button);




// button.addEventListener("click", () => {
//     myArray.forEach(inputElement => {
//         if (inputElement.element.rules) {
//             let validationResult = true;
//             validationResult = inputElement.validate();
//             console.log(validationResult);
//         }
//     })
// })


button.addEventListener("click", () => {
    let validationResult = true;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].element.rules) {
            validationResult = myArray[i].validate();
            if (!validationResult) {
                alert("validation Error!")
                break;
            }
        }
    }
    if (validationResult) {
        alert('Information Saved!')
    }
});