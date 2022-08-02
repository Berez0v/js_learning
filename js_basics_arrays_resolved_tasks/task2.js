const myArray = [3, 5, 7, 8, 9, 56, 436, 546, 54, 3, 2, 1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

//display elements which less than 5.
myArray.forEach(element => {
    if (element < 5)
        console.log(element);
});
// Find index of min&max elements
let min = Number.POSITIVE_INFINITY;
let indexMin, indexMax = -1;
let max = Number.NEGATIVE_INFINITY;
myArray.forEach((element, index) => {
    if (element < min) {
        min = element;
        indexMin = index;
    }
    if (element > max) {
        max = element;
        indexMax = index;
    }
});
console.log(` Index of max element ${indexMax}, index of min element ${indexMin}`);
//sort array
myArray.sort((a, b) => {
    return b - a;
});
console.log(myArray);
// Display elements which greater than average.
let average = 0;
myArray.forEach(element => {
    average += element;
})
average /= (myArray.length);
console.log(average);
myArray.forEach((element) => {
    if (element > average)
        console.log(element);
});
