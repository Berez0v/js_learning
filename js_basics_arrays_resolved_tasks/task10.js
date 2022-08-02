let myArr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

function uniqueSorted(array){
let newArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
});
return newArray.sort((a,b)=>a-b);
}
console.log(uniqueSorted(myArr));