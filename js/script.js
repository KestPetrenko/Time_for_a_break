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

inputPromodo.addEventListener("keypress", startPromodo);
function startPromodo(evt){
    if (evt.keyCode == 13) {
        promodoTime = inputPromodo.value;
        min = promodoTime;
        console.log(`Время работы:` + promodoTime);
        time2 = new Date(+time1 + `${promodoTime}` * 6e4);
        nextMinuts = time2.getMinutes();
        nextHours = time2.getHours();
        hourTime.innerHTML = nextHours + `:`;
        minutTime.innerHTML = print(nextMinuts);
        funcStart();
    }
}

inputShort.addEventListener("keypress", startShort);
function startShort(evt){
    if (evt.keyCode == 13) {
        shortTime = inputShort.value;
        min = shortTime;
        time2 = new Date(+time1 + `${shortTime}` * 6e4);
        console.log(`Время короткого:` + shortTime);
        nextMinuts = time2.getMinutes();
        nextHours = time2.getHours();
        hourTime.innerHTML = nextHours + `:`;
        minutTime.innerHTML = print(nextMinuts);
        funcStart();
    }
}

inputLong.addEventListener("keypress", startLong);
function startLong(evt){
    if (evt.keyCode == 13) {
        longTime = inputShort.value;
        min = longTime;
        time2 = new Date(+time1 + `${longTime}` * 6e4);
        console.log(`Время короткого:` + longTime);
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
    let secCircle = document.querySelector(".circle");
    if (sec > 0) {
        sec--;
        second.innerHTML = print(sec);
        secCircle.style.strokeDasharray = `${sec * 1.666}, 100`;
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
    // else {
    //     min = 0;
    //     minuts.innerHTML = print(min) + `:`;
    // }
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
        icon : "..."
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