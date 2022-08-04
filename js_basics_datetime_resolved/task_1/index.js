function curDay(separator){
let date = new Date();
return `"${date.getMonth()+1}${separator}${date.getDay()}${separator}${date.getFullYear()}"`;

}
console.log(curDay('/'))
console.log(curDay('-'))