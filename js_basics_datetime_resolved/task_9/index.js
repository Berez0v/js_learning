

let timerInputDays = document.getElementById("days"); // Берём строку
let timerInputHours = document.getElementById("hours"); // Берём строку
let timerInputMins = document.getElementById("mins"); // Берём строку
let buttonRun = document.getElementById("button");// Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени
let timeInSeconds;
let timeError;
buttonRun.addEventListener('click', function () {
    timeInSeconds = 60 * (parseInt(timerInputDays.value) * 60 * 24 + parseInt(timerInputHours.value) * 60 + parseInt(timerInputMins.value));
    if (timeInSeconds === 0) {
        document.getElementById("error").innerText = " Please enter at least one value"
        timerShow.innerHTML="";
        timeError=0;
    } else {
        timeError=1;
        document.getElementById("error").innerText = "";
    }
    timer = setInterval(function () {

        days = timeInSeconds / 24 / 60 / 60 % 60
        seconds = timeInSeconds % 60 // Получаем секунды
        minutes = timeInSeconds / 60 % 60 // Получаем минуты
        hour = (timeInSeconds / 60 / 60 % 60 - Math.floor(days) * 24) // Получаем часы
        if (timeInSeconds <= 0) {
            clearInterval(timer);
            if(timeError)
            timerShow.innerHTML = 'The time has come!';
        } else {
            let strTimer = `${Math.trunc(days)} days ${Math.trunc(hour)} hours ${Math.trunc(minutes)} minutes ${seconds} seconds`;
            timerShow.innerHTML = strTimer;
        }
        --timeInSeconds;
    }, 1000)
})


