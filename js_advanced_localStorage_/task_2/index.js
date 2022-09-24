let tasks = [];

function remove(item) {
    const taskIndex = tasks.findIndex(item => item.id === Number(item.id));

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)
    }

    item.remove()

    count.innerText = `${tasks.length} tasks`;
    localStorage.setItem('tasks', JSON.stringify(tasks))
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
    if (!localStorage.getItem("tasks")) {
        return
    }

    tasks = JSON.parse(localStorage.getItem("tasks"));
    insertItems()
}

const insertItems = () => {
    const list = document.querySelector('.list');

    count.innerText = `${tasks.length} tasks`;
    tasks.forEach(elem => {
        const listElement = document.createElement('li');
        listElement.id=`element-${elem.id}`
        listElement.innerHTML = `<input disabled = "true" value="${elem.task}" type="text"><div id="redact"></div><p id="delete">X</p>`;
        list.insertBefore(listElement, list.children[0]);
        listElement.querySelector("#delete").addEventListener('click', () => {
            remove(listElement)
        });
        listElement.querySelector("#redact").addEventListener('click', redact);
    })
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

addNew.onclick = () => {
    const newTask = document.querySelector('#addItem');
    const list = document.querySelector('.list');

    if (!newTask.value) {
        return;
    }

    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    const id = randomInteger(100, 9999999)
    const newElement = {
        id,
        task: newTask.value,
    }

    tasks.push(newElement)
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const listElement = document.createElement('li');
    const countValue = parseInt(count.innerText);
    count.innerText = `${countValue + 1} tasks`
    listElement.innerHTML = `<input value="${newTask.value}" type="text" disabled = "true"><div id="redact"></div><p id="delete">X</p>`;
    listElement.querySelector("#delete").addEventListener('click', ()=> {
        remove(listElement)
    });
    listElement.querySelector("#redact").addEventListener('click', redact);

    list.insertBefore(listElement, list.children[0]);

    newTask.value = "";
}


