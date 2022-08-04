function getDaysInMonth (month,year){
    const myDate = new Date(year, month, 0);
    return myDate.getDate();
}

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
