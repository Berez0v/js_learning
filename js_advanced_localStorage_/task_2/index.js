
function remove(event) {
    let btn = event.target;
    let allTasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    allTasks.forEach((task, index) => {
        if (task.task === btn.parentNode.children[0].value) {
            allTasks.splice(index, 1);
        }
    })
    localStorage.setItem("tasks", JSON.stringify(allTasks));

    btn.parentNode.parentNode.removeChild(btn.parentNode);
    const count = document.querySelector('.count')
    const countValue = parseInt(count.innerText);
    count.innerText = `${countValue - 1} tasks`
}

function redact(event) {
   const accept =  document.createElement('span');
   accept.setAttribute('class','acceptChanges');
   accept.innerText = "Accept";
   event.target.style.display = "none";
   buttonRedact = event.target;
   buttonRedact.parentNode.appendChild(accept);
   const input = buttonRedact.parentNode.children[0];
   input.disabled = false;    
   let allTasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
   let indexValue = 0;
   allTasks.forEach((task, index) => {
       if (task.task === input.value) {
           indexValue = index;
        }
    })  
    accept.addEventListener('click',()=>{
        allTasks[indexValue].task = input.value;
        accept.parentNode.removeChild(accept);
        buttonRedact.style.display = "block";
        input.disabled = true;
        localStorage.setItem("tasks", JSON.stringify(allTasks));
    })


}

const addNew = document.querySelector('.addButton');
const count = document.querySelector('.count')
window.onload = () => {
    if (localStorage.getItem("tasks") == null) {
        return;
    } else {

        const list = document.querySelector('.list');
        let allTasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
        count.innerText = `${allTasks.length} tasks`;
        allTasks.forEach(elem => {
            const listElement = document.createElement('li');
            listElement.innerHTML = `<input disabled = "true" value="${elem.task}" type="text"><div id="redact"></div><p id="delete">X</p>`;
            list.insertBefore(listElement, list.children[0]);
            listElement.querySelector("#delete").addEventListener('click', remove);
            listElement.querySelector("#redact").addEventListener('click', redact);
        })
        

    }
}


addNew.onclick = () => {
    const newTask = document.querySelector('#addItem');
    const list = document.querySelector('.list');
    if (!newTask.value) {
        return;
    }
    localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: newTask.value }]));

    const listElement = document.createElement('li');
    const countValue = parseInt(count.innerText);
    count.innerText = `${countValue + 1} tasks`
    listElement.innerHTML = `<input value="${newTask.value}" type="text" disabled = "true"><div id="redact"></div><p id="delete">X</p>`;
    listElement.querySelector("#delete").addEventListener('click', remove);
    listElement.querySelector("#redact").addEventListener('click', redact);

    list.insertBefore(listElement, list.children[0]);

    newTask.value = "";
}


