function amount(a,b){
    let sum = 0;
    for( let i=a;i<b;i++){
        if(i/2===Math.round(i/2))
        sum++; 
    }
    return(sum);
}
console.log(amount(2,9))
console.log(amount(10,15))