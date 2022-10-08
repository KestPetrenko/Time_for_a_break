let containerSettings = document.querySelector(".container_setting");
let openSettings = document.querySelector(".open_settings");
let inputPromodo = document.querySelector(".input_promodo");
let inputShort = document.querySelector(".input_short");
let inputLong = document.querySelector(".input_long");
let promodoTime;
let shortTime;
let longTime;
let min = 2;
let sec = 2;
let t;
let second = document.querySelector(".minute-timer");
let minuts = document.querySelector(".second-timer");

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
    changeThemes.forEach(element =>{
        let keyTopic = element.classList.toggle("themeBody");
        localStorage.setItem("theme", JSON.stringify(keyTopic));
    });
}

let keyTopics = JSON.parse(localStorage.getItem("theme"));

if (keyTopic == true) {
    changeThemes.forEach(element => {
        document.body.classList.toggle("themeBody");
    });
}

let selectMusic = document.querySelector(".currency");
let music;
let audio;

musicFunction = function () {
    music = selectMusic.value;
    localStorage.setItem("melody", JSON.stringify(music))
}

music = JSON.parse(localStorage.getItem("melody"));
if (music == "bell") {
    console.log(music);
    audio = new Audio("musics/bell.mp3");
    audio.play();
}
if (music == "bird") {
    console.log(music);
}
if (music == "relax") {
    console.log(music);
}
if (music == "digital") {
    console.log(music);
}
if (music == "beer") {
    console.log(music);
}

inputPromodo.addEventListener("keypress", startPromodo);
function startPromodo(evt){
    if (evt.keyCode == 13) {
        promodoTime = inputPromodo.value;
        console.log(`Время работы:` + promodoTime)
        funcStart();
    }
}

inputShort.addEventListener("keypress", startShort);
function startShort(evt){
    if (evt.keyCode == 13) {
        shortTime = inputShort.value;
        console.log(`Время короткого:` + shortTime)
        funcStart();
    }
}

inputLong.addEventListener("keypress", startLong);
function startLong(evt){
    if (evt.keyCode == 13) {
        longTime = inputShort.value;
        console.log(`Время короткого:` + longTime)
        funcStart();
    }
}

function funcStart() {
    setInterval(startTime, 1000);
}



function startTime() {
    if (sec > 0) {
        sec--;
        second.innerHTML = print(sec);
    } else {
        sec = 5;
        min--;
        second.innerHTML = print(sec);
    }
    if (min >= 0) {
        minuts.innerHTML = print(min);
    } else {
        min = 0;
        minuts.innerHTML = print(min);
    }
    if(sec==0 && min==0){
        musicFunction();
        min = 0;
        sec = 0;
    }
}

function print(e) {
    if (e <= 9) {
        return "0" + e;
    } else {
        return e;
    }
}