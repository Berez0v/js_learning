function square(x) {
    return x * x;
}
function convert(func, arr) {
    let newArray = [];
    arr.forEach(element => {
        newArray.push(func(element));
    });
    return newArray;

}
const myArray = [1, 2, 3, 4];
console.log(convert(square, myArray));
console.log(myArray);
