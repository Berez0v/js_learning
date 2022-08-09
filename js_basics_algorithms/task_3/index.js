function factorial (n) {
    if(n<0){
    return "input error"
    }if (!n){
        return 1;
    }else return n*factorial(n-1);
}
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(-1));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(1));
console.log(factorial(21));