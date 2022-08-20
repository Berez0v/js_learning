let myInput = document.querySelector('#inputForText');
myInput.addEventListener('input', () => {
    document.querySelector('.myBtn').disabled = false;

    document.querySelector('.myBtn').disabled = !myInput.value;

});

let button = document.querySelector('.myBtn');
button.addEventListener('click', () => {
    let listElement = document.createElement('li');
    listElement.innerText = myInput.value;
    document.querySelector('.list').appendChild(listElement);
    myInput.value = "";
    document.querySelector('.myBtn').disabled = true;

})