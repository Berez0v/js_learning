let Myarray = document.querySelector("tbody").children;
for (let i = 0; i < Myarray[0].children.length; i++) {
    for (let j = 0; j < Myarray[0].children.length; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
            Myarray[i].children[j].style.background = 'black';
        } else if (i % 2 != 0 && j % 2 === 0) {
            Myarray[i].children[j+1].style.background = 'black';
        }
    }
}