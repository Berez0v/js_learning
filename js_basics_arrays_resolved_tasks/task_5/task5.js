function square(x) {
    return x * x;
}
function convert(func, arr) {
    return arr.map(func);

}
const myArray = [1, 2, 3, 4];
console.log(convert(square, myArray));
console.log(myArray);
