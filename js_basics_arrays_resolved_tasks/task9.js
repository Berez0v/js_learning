let default_array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
function filter(arr) {
    let newArr = [];
    arr.forEach((element) => {
        if (typeof element === 'number') {
            newArr.push(element);
        }
    });
    return newArr;
}
console.log(default_array);
default_array = filter(default_array);
console.log(default_array);