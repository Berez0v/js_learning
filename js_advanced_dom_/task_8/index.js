let myInput = document.querySelector('#inputForText');
myInput.addEventListener('input', () => {
    document.querySelector('.myBtn').disabled = false;
    if (!myInput.value) {
        document.querySelector('.myBtn').disabled = true;
    }
});

let button = document.querySelector('.myBtn');
button.addEventListener('click', () => {
    let listElement = document.createElement('li');
    listElement.innerText = myInput.value;
    document.querySelector('.list').appendChild(listElement);
    myInput.value = "";
    document.querySelector('.myBtn').disabled = true;

})