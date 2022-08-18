let Input = document.querySelector('#myInp');


Input.addEventListener('input', () => {
    Input.value = Input.value.replace(/[^0-9.]/, '');
});