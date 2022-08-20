const elem = document.querySelector("#elem");
elem.tabIndex = 0;
const elem2 = document.querySelector('#elem2');
elem2.tabIndex = 0;

elem.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" && event.code != "ArrowUp" && event.code != "ArrowDown")
        return 0;

    let rectElem = elem.getBoundingClientRect();
    let x = rectElem.x;
    let y = rectElem.y;

    if (event.code == "ArrowRight") x += elem.offsetWidth;
    if (event.code == "ArrowLeft") x -= elem.offsetWidth;
    if (event.code == "ArrowUp") y -= elem.offsetHeight;
    if (event.code == "ArrowDown") y += elem.offsetHeight;

    elem.style.left = x + "px";
    elem.style.top = y + "px";
});



elem2.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" && event.code != "ArrowUp" && event.code != "ArrowDown")
        {return 0;}

    let rectElem = elem2.getBoundingClientRect();
    let x = rectElem.x// +window.pageXOffset;
    let y = rectElem.y //+ window.pageYOffset;           
    let viewPort = document.querySelector('#field');
    let viewPortSpecs = viewPort.getBoundingClientRect();
    let rightValue = viewPortSpecs.x + viewPort.offsetWidth;
    let leftValue = viewPortSpecs.x;
    let topValue = viewPortSpecs.y;
    let bottomValue = viewPortSpecs.y + viewPort.offsetHeight;
    if (event.code === "ArrowRight" && x + elem2.offsetWidth < rightValue){ x += elem2.offsetWidth;}
    if (event.code === "ArrowLeft" && x - elem2.offsetWidth >= leftValue) {x -= elem2.offsetWidth;}
    if (event.code === "ArrowUp" && y - elem2.offsetHeight >= topValue){ y -= elem2.offsetHeight;}
    if (event.code === "ArrowDown" && y + elem2.offsetHeight < bottomValue) {y += elem2.offsetHeight;}

    elem2.style.left = x + "px";
    elem2.style.top = y + "px";
});