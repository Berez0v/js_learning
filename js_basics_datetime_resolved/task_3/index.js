function month_name (date) {
 const   options ={month: 'long'}
    return date.toLocaleDateString("en-En",options);
}


console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
