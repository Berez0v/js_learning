function checkAge (age){
if( (age <=14 || age >= 90) && age >0 ) {
    return true
}else return false;
}
function checkAgeV2 (age){
if( !((age <=14 || age >= 90) && age >0 )  ) {
    return false
}else return true;
}




console.log(checkAge(25));
console.log(checkAge(-25));
console.log(checkAge(-5));
console.log(checkAge(5));
console.log(checkAge(95));

console.log("-----------------");

console.log(checkAgeV2(15));
console.log(checkAgeV2(-5));
console.log(checkAgeV2(45));
console.log(checkAgeV2(5));
console.log(checkAgeV2(95));