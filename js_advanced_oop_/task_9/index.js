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
    validate(){
//Next task
    }
}

// create form body

const form = document.createElement('form');
document.querySelector('body').appendChild(form);
let myArray = []; //array with form elements
myArray.push(new FormElement("text", "name", "NAME", "John", "required"));
myArray.push(new FormElement("text", "email", "E-mail", "mail@mail.com", "required|mail"));
myArray.push(new FormElement("text", "age", "Age", "62", "required|min:10"));
myArray.push(new FormElement("text", "birtDate", "Date of birth", "01.01.1970", "required|date"));

//creating button
const button = document.createElement('button');
button.setAttribute('id', 'submit');
button.innerText = 'Submit';
form.appendChild(button);