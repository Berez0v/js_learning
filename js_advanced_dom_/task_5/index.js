const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const myInput = document.getElementById('info');
decreaseButton.addEventListener('click', () => {
    myInput.value = parseInt(myInput.value) - 1;
    if (parseInt(myInput.value) === 0) {
        decreaseButton.disabled = true;
    }
    if (parseInt(myInput.value) < 9) {
        increaseButton.disabled = false;
    }
})


increaseButton.addEventListener('click', () => {
    myInput.value = parseInt(myInput.value) + 1;
    if (parseInt(myInput.value) === 9) {
        increaseButton.disabled = true;
    }
    if (parseInt(myInput.value) > 0) {
        decreaseButton.disabled = false;
    }
})