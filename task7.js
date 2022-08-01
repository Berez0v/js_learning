//I'm not sure about this solution
let extract = function (firstPos,secondPos){
    let  array =[1, 2, 3, 4, 5, 6, 7, 8, 9];
    let output=[]; 
    for (;firstPos<=secondPos;firstPos++){
        output.push(array[firstPos]);
    }
      return output;
}
console.log(extract(2,4));
