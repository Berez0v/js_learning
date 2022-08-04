//I'm not sure about this solution
Array.prototype.extract = function(firstPos,secondPos) {
	let rtnArray= [];
    if (secondPos > this.length-1){
        secondPos=this.length-1;
    }
     for (; firstPos <= secondPos; firstPos++) {
       rtnArray.push(this[firstPos]);
    }
    return rtnArray;
};

let  myArray =[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArray.extract(2,4));  //[3, 4, 5]
console.log(myArray.extract(2,100));  //[3, 4, 5, 6, 7, 8, 9]
