function compare_dates(firstDate, secondDate) {
    const diff = firstDate.getTime() - secondDate.getTime();
    let returnValue = 'Date1 = Date2';
    if (diff < 0) {
        returnValue = 'Date2 > Date1'
    } else if (diff > 0) {
        returnValue = 'Date1 > Date2'
    }
return returnValue;
}



console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
