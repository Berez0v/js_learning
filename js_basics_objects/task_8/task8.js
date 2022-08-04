const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}



const Ro = [{ "Mo": "Luni" }, { "Tu": "Marti" }, { "We": "Miercuri" }, { "Th": "Joi" }, { "Fr": "Vineri" }, { "Sa": "Simbata" }, { "Su": "Duminica" }];
function translate(myObj, arrOfObjects) {

    for (let key in myObj) {

        myObj[key] = arrOfObjects.find(element => {
            let findKey = Object.keys(element)
            if (findKey[0] === key) {
                      return element[findKey[0]];
            }
        })[key];


    }
}
translate(weekDays, Ro);
console.log(weekDays);