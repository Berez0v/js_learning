function checkColor(color) {
    const colors = ["red", "green", "blue"];
    let idx = -1;
    colors.forEach((element, index) => {
        if (element === color) {
            idx = index;
        }
    });
    return idx;

}
console.log(checkColor("blusdaf"));
console.log(checkColor("blue"));
console.log(checkColor("blusdaf"));