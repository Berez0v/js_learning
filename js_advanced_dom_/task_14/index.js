let button = document.querySelector('#remove');
button.addEventListener('click', ()=>{
 let parentElement = document.querySelector('#parent');
 let childElement = document.querySelector('#child');

parentElement.removeChild(childElement);
button.disabled = true;
});