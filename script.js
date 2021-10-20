window.onload = function() {
    let date = new Date();
    console.log(date.getDay());
    document.cookie = "username=Alex; expires=Wed, 20 Oct 2020 12:00:00 UTC; path=/";
    time();
    year();
    differenceDay();
    setInterval(function() { time(); }, 1000);
}

function time() {
    let date = new Date();
    console.log(date.getDay());
    if (date.getMinutes() < 10) {
        if (date.getSeconds() < 10) document.getElementById("time").innerHTML = date.getHours() + ":0" + date.getMinutes() + ":0" + date.getSeconds();
        else document.getElementById("time").innerHTML = date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds();
    } else {
        if (date.getSeconds() < 10) document.getElementById("time").innerHTML = date.getHours() + ":" + date.getMinutes() + ":0" + date.getSeconds();
        else document.getElementById("time").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
}

function year() {
    document.querySelector("#year").innerHTML = new Date().getFullYear();
}

function differenceDay() {
    let now = new Date();
    let date = new Date("2020/09/21");
    let res = now - date;
    res = res / (1000 * 60 * 60 * 24);
    document.querySelector("#difference").innerHTML = Math.floor(res) + " days";
}

function setLanguage() {
    document.querySelector(".spanish").addEventListener("click", function() {

    });
    document.querySelector(".english").addEventListener("click", function() {

    });
}