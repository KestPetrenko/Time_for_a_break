let containerSettings = document.querySelector(".container_setting");
let openSettings = document.querySelector(".open_settings");
let inputPromodo = document.querySelector(".input_promodo");
let inputShort = document.querySelector(".input_short");
let inputLong = document.querySelector(".input_long");
let promodoTime;
let shortTime;
let longTime;
let min;
let sec;
let t;
let minuts = document.querySelector(".minute-timer");
let second = document.querySelector(".second-timer");
let time1 = new Date();
let time2;
let nextMinuts;
let nextHours;
let hourTime = document.querySelector(".minute-time");
let minutTime = document.querySelector(".second-time")

openSettings.addEventListener("click", openMenuSettings);
function openMenuSettings() {
    containerSettings.classList.toggle("none")
}

let selectHour = document.querySelector(".currency__hour");
let hour;
hourFunction = function () {
    hour = selectHour.value;
    console.log(hour);
}

document.querySelector(".unicode").addEventListener("click", hideСontainerSetting);
function hideСontainerSetting() {
    containerSettings.classList.toggle("none")
}

const changeThemes = document.querySelectorAll("[data-theme]");

let theme = document.querySelector(".check").addEventListener("click", changeTopic);
function changeTopic() {
    for(let i of changeThemes){
        let keyTopic = i.classList.toggle("themeBody");
        localStorage.setItem("theme", JSON.stringify(keyTopic));
    }
}

let keyTopic = JSON.parse(localStorage.getItem("theme"));
if (keyTopic == true) {
    for (let i of changeThemes) {
        i.classList.toggle("themeBody")
    }
}

let selectMusic = document.querySelector(".currency");
let audio1 = new Audio("musics/bell.mp3");
let audio2 = new Audio("musics/bird.mp3");
let audio3 = new Audio("musics/relax.mp3");
let audio4 = new Audio("musics/digital.mp3");
let audio5 = new Audio("musics/beer.mp3");
let music = "bird";

function musicFunction() {
    music = selectMusic.value;
    localStorage.setItem("melody", JSON.stringify(music));
}

function playAlarm() {
    music = JSON.parse(localStorage.getItem("melody"))
    console.log(music);
    if (music === "bell") {
        console.log(music);
        audio1.play();
    }
    if (music === "bird") {
        console.log(music);
        audio2.play();
    }
    if (music === "relax") {
        console.log(music);
        audio3.play();
    }
    if (music === "digital") {
        console.log(music);
        audio4.play();
    }
    if (music === "beer") {
        console.log(music);
        audio5.play();
    }
}

inputPromodo.addEventListener("keypress", startPeriod);
inputShort.addEventListener("keypress", startPeriod);
inputLong.addEventListener("keypress", startPeriod);

function startPeriod(evt){
    if (evt.keyCode == 13) {
        longTime = inputShort.value;
        min = longTime;
        time2 = new Date(+time1 + `${longTime}` * 6e4);
        nextMinuts = time2.getMinutes();
        nextHours = time2.getHours();
        hourTime.innerHTML = nextHours + `:`;
        minutTime.innerHTML = print(nextMinuts);
        funcStart();
    }
}

function funcStart() {
    t = setInterval(startTime, 1000);
}

function startTime() {
    if (sec > 0) {
        sec--;
        second.innerHTML = print(sec);
    } else {
        sec = 59;
        min--;
        second.innerHTML = print(sec);
    }
    if (min >= 0) {
        minuts.innerHTML = print(min) + `:`;
    }
    if(min==1){
        notifSet ();
    }
    else {
        min = 0;
        minuts.innerHTML = print(min) + `:`;
    }
    if(sec===0 && min===0){
        clearInterval(t);
        min = 0;
        sec = 0;
        second.innerHTML = sec;
        minuts.innerHTML = min;
        playAlarm();
    }
}

function print(e) {
    if (e <= 9) {
        return "0" + e;
    } else {
        return e;
    }
}

function notifyMe () {
    let notification = new Notification ("Все еще работаешь?", {
        tag : "ache-mail",
        body : "Пора сделать паузу и отдохнуть",
        icon : "data:image/jpeg;base64,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"
    });
}

function notifSet () {
    if (!("Notification" in window))
        alert ("Ваш браузер не поддерживает уведомления.");
    else if (Notification.permission === "granted")
        setTimeout(notifyMe, 2000);
    else if (Notification.permission !== "denied") {
        Notification.requestPermission (function (permission) {
            if (!('permission' in Notification))
                Notification.permission = permission;
            if (permission === "granted")
                setTimeout(notifyMe, 2000);
        });
    }
}
