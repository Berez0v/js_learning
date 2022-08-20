
function changeColour() {
    document.body.style.background = 'orange'
}

function mainFunction() {
    let myBody = document.getElementById('main_content')
    myBody.style.background = 'red';
    setTimeout(() => myBody.style.background = 'green', 3000);

    let my_Ol = document.createElement('ol');
    my_Ol.id = 'list';
    myBody.appendChild(my_Ol);


    let listInterval = setInterval(() => {
        my_Ol = document.getElementById('list')
        if (my_Ol.children.length < 20) {
            let newLi = document.createElement('li');
            if (my_Ol.children.length % 2 === 0) {
                newLi.style.background = 'purple';
            } else {
                newLi.style.background = 'lime';
            }

            newLi.textContent = `element ${my_Ol.children.length + 1}`
            my_Ol.appendChild(newLi);
        } else {
            clearInterval(listInterval);
        }

    }, 2000);
}
document.onload = mainFunction();
let myButton = document.getElementById('or_btn');
myButton.addEventListener('click', changeColour);