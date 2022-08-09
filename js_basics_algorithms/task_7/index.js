function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function createSquareArray(n){
   let myArr  = new Array(n);
   for (let i = 0;i<n;i++){
    myArr[i]= new Array(n)
    for (let j = 0; j < n; j++) {
       if(i === j){
        myArr[i][j]=i;
       }else myArr[i][j] = getRandomInt(15); 
    }
   }
return myArr;
}
console.log(createSquareArray(5));