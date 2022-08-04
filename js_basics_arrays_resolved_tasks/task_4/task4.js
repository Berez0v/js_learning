function sumInputNumbers() {
    let inputnumber;
    let myArray = [];
    myArray[0] = parseInt(prompt("Enter Number", ""));// input first number
    while (!isNaN(myArray[myArray.length - 1])) {  // if input is NaN the cycle will stop
        inputnumber = prompt("Enter Number", "");
        myArray.push(parseInt(inputnumber, 10));
    }
    myArray.pop();// delete last element (because it is NaN)
    return myArray.reduce((previousValue, currentValue) => previousValue + currentValue);// find and return sum of elements
}
console.log(sumInputNumbers());