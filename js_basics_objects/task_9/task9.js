const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Simbata": "Sa",
    "Duminica": "Su"
}
function swapKeyAndValue(myObj) {
    return Object.fromEntries(
        Object.entries(myObj).map(([key, value]) => [value, key])
    );
}
console.log(swapKeyAndValue(weekDays));