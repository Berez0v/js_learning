function fibonacci (n){
    if(n<=0){
        return "input error"
    }
    let a=0,b=1;
    if (n===1){
        return 0;
    }
let c=1;
for (let i=2;i<n;i++){
    c=a+b;
    a=b;
    b=c;
}
return c;
}
console.log(fibonacci(11)); //55
console.log(fibonacci(1)); //0
console.log(fibonacci(2)); //1
console.log(fibonacci(0));// input error
console.log(fibonacci(14)); //233