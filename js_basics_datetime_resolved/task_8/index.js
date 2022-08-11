let clocktimer;
function currentTime() {
    clearTimeout(clocktimer);
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("hours").innerText = `${hour}:`;
    document.getElementById("mins").innerText = `${min}:`;
    document.getElementById("sec").innerText = `${sec}`;
    clocktimer = setTimeout(currentTime, 1000)
}
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

function ClearСlock() {
    clearTimeout(clocktimer);
} 
currentTime();