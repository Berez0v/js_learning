function dragstart_handler(ev) {
    ev.dataTransfer.setData("someData", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("someData");
    ev.target.appendChild(document.getElementById(data));
}





let parentRight = document.querySelector('#parent-right');
let parentLeft = document.querySelector('#parent-left');
let child = document.querySelector('#child');

child.setAttribute('draggable', 'true');
child.addEventListener('dragstart', dragstart_handler);

parentLeft.addEventListener('drop', drop_handler);
parentLeft.addEventListener('dragover', dragover_handler);

parentRight.addEventListener('drop', drop_handler);
parentRight.addEventListener('dragover', dragover_handler);