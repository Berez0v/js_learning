const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
}



function translate(myObj) {
    const Ro = [{ "Mo": "Luni" }, { "Tu": "Marti" }, { "We": "Miercuri" }, { "Th": "Joi" }, { "Fr": "Vineri" }, { "Sa": "Simbata" }, { "Su": "Duminica" }]
   
    for (let key in myObj) {
        for (let i = 0; i < Ro.length; i++) {
            for (let value in Ro[i]) {
                if (value === key) {
                    myObj[key] = Ro[i][value];
                }
            }
        }
    }

}
translate(weekDays);
console.log(weekDays);