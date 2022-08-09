function createTree (tag,myObj){
let list = document.createElement('ul');
for(let key in myObj){
    let listElement = document.createElement('li');
    listElement.textContent = key;
    if(Object.keys(myObj[key]).length){
        createTree(listElement,myObj[key]);
    }
   list.appendChild(listElement);
}
tag.appendChild(list);
}




let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
let container = document.getElementById('container');
createTree(container, data);
