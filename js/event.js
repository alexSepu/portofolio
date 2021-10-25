window.onload = function() {
    setTime();
    changeLanguage();
    Fullyear();
    setInterval(setTime(), 1000);
    setLanguage();
}

function changeLanguage() {
    document.querySelector(".spanish").addEventListener("click", function() {
        setCookie("es");
    });
    document.querySelector(".english").addEventListener("click", function() {
        setCookie("en");
    });
}

function Fullyear() {
    document.querySelector("#year").innerHTML = year();
}

function setTime() {
    document.getElementById("time").innerHTML = time();
}

function diff() {
    let array = differenceDay();
    document.querySelector("#date").innerHTML = array[0];
    document.querySelector("#difference").innerHTML = array[1];
}