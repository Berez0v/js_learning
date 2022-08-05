function timeConvert(minutes) {
    return `${minutes} minutes = ${Math.floor(minutes / 60)} hour(s) and ${minutes - Math.floor(minutes / 60)*60} minute(s)`
}


console.log(timeConvert(200));  // "200 minutes = 3 hour(s) and 20 minute(s)."
console.log(timeConvert(300)); 
