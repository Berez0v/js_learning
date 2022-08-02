Array.prototype.checkColor = function (color) {
    let idx = -1;
    this.forEach((element, index) => {
        if (element === color) {
            idx = index;
        }
    });
    return idx;
}

const colors = ["red", "green", "blue", "yellow", "black", "white"];

console.log(colors.checkColor("blusdaf"));
console.log(colors.checkColor("blue"));
console.log(colors.checkColor("blusdaf"));
console.log(colors.checkColor("black"));