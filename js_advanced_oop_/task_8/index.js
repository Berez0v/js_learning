class Elem {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    html(content) {
        this.element.innerText = content;
        return this;
    }
    myPrepend(content) {
            this.element.innerText += content;
            return this;
    }
     myAppend(content) {
        this.element.innerText = content + this.element.innerText;
        return this;
     }
     attr(name,value){
        this.element.setAttribute(name,value);
        return this;
     }
}

var hello = new Elem('div');
console.log(hello.element.innerText);
hello.html("Hello World").myPrepend("!").myAppend("ll");
hello.attr('class', 'www').attr('title', 'hello');
console.log(hello.element.innerText);
