const myArray = [3, 5, 7, 8, 9, 56, 436, 546, 54, 3, 2];
// console.log(myArray);
// for
for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("--------------");
// FOR of
for (const value of myArray) {
    console.log(value);
}
console.log("--------------");
// For in
for (const value in myArray) {
    console.log(myArray[value]);
}
console.log("--------------");
// For each method
myArray.forEach(element => console.log(element));
console.log("--------------");
// map method
myArray.map((element) => console.log(element));
console.log("--------------");
//My way:
myArray.filter((current) => {
    console.log(current);
});

// In my opinion ForEach method is the best way to display array elements.