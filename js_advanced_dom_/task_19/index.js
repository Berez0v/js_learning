function dragstartHandler(ev) {
    ev.dataTransfer.setData("someData", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}
function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}
function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("someData");
    ev.target.appendChild(document.getElementById(data));
}





const parentRight = document.querySelector('#parent-right');
const parentLeft = document.querySelector('#parent-left');
const child = document.querySelector('#child');

child.setAttribute('draggable', 'true');
child.addEventListener('dragstart', dragstartHandler);

parentLeft.addEventListener('drop', dropHandler);
parentLeft.addEventListener('dragover', dragoverHandler);

parentRight.addEventListener('drop', dropHandler);
parentRight.addEventListener('dragover', dragoverHandler);