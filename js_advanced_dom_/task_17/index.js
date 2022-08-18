let element = document.querySelector('#elem');

element.addEventListener('click', () => {
    alert(`Current width =${element.offsetWidth} Current height =${element.offsetHeight}`);
    element.style.width = `${2*parseInt(element.offsetWidth)}px`;
    element.style.height = `${2*parseInt(element.offsetHeight)}px`;
    


});