function setCookie(lang) {

    let date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = "language=" + lang + "; expires=" + date + "; path=/";
    location.reload();
}

function time() {
    let date = new Date();
    if (date.getMinutes() < 10) {
        if (date.getSeconds() < 10) return date.getHours() + ":0" + date.getMinutes() + ":0" + date.getSeconds();
        else return date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds();
    } else {
        if (date.getSeconds() < 10) return date.getHours() + ":" + date.getMinutes() + ":0" + date.getSeconds();
        else return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
}

function getCookie(name) {
    let cookie = document.cookie.split(";");
    let aux;
    for (let i = 0; i < cookie.length; i++) {
        aux = cookie[i].split("=");
        if (aux[0].trim() == name.trim()) return aux[1];
    }
    return null;
}

function year() {
    return new Date().getFullYear();
}

function differenceDay() {
    let now = new Date();
    let date = new Date("2020/09/21");
    let res = now - date;
    res = res / (1000 * 60 * 60 * 24);
    let array = [];
    array[0] = now.toLocaleDateString();
    array[0] = Math.floor(res) + " days";
    return array;
}

function setLanguage() {
    let lang = getCookie('language');
    console.log(lang);
    if (lang != null) {
        let i = 1;   
        fetch("https://alexsepulvedaweb.netlify.app/lang/lang-" + lang + ".json")
            //fetch("http://localhost/webEstatica/lang/lang-" + lang + ".json")        
            .then((response)  =>  {  return  response.json();  })              
            .then((message)  =>  { 
                console.log(message["language"]);
                document.querySelectorAll(".education")[0].innerHTML = message["language"]["EDUCATION"];
                document.querySelectorAll(".education")[1].innerHTML = message["language"]["EDUCATION"];
                document.querySelectorAll(".skills")[0].innerHTML = message["language"]["SKILLS"];
                document.querySelectorAll(".skills")[1].innerHTML = message["language"]["SKILLS"];
                document.querySelectorAll(".contact")[0].innerHTML = message["language"]["CONTACT"];
                document.querySelectorAll(".contact")[1].innerHTML = message["language"]["CONTACT"];
                document.querySelectorAll(".experience")[0].innerHTML = message["language"]["EXPERIENCE"];
                document.querySelectorAll(".experience")[1].innerHTML = message["language"]["EXPERIENCE"];
                document.querySelector(".language").innerHTML = message["language"]["LANGUAGE"];
                document.querySelector(".spain").innerHTML = message["language"]["SPANISH"];
                document.querySelector(".en").innerHTML = message["language"]["ENGLISH"];
                document.querySelector(".download").innerHTML = message["language"]["DOWNLOAD"];
                document.querySelector(".dttb").innerHTML = message["language"]["DATETB"];
                document.querySelector(".tb").innerHTML = message["language"]["TECHB"];
                document.querySelector(".sttb").innerHTML = message["language"]["STTB"];
                document.querySelector(".cpad").innerHTML = message["language"]["CPAD"];
                document.querySelector(".stcpad").innerHTML = message["language"]["STCPAD"];
                document.querySelector(".dtcpad").innerHTML = message["language"]["DATECPAD"];
                document.querySelector(".dtawd").innerHTML = message["language"]["DATEAWD"];
                document.querySelector(".awd").innerHTML = message["language"]["AWD"];
                document.querySelector(".stawd").innerHTML = message["language"]["STAWD"];
                document.querySelector(".prlato").innerHTML = message["language"]["PRLATO"];
                document.querySelector(".exp").innerHTML = message["language"]["SKEX"];
                document.querySelector(".web").innerHTML = message["language"]["SKW"];
                document.querySelector(".ado").innerHTML = message["language"]["SKA"];
                document.querySelector(".po").innerHTML = message["language"]["SKPO"];
                document.querySelector(".qadt").innerHTML = message["language"]["DATEQA"];
                document.querySelector(".qacon").innerHTML = message["language"]["QAC"];
                document.querySelector(".qafun").innerHTML = message["language"]["QAF"];
                document.querySelector(".fe").innerHTML = message["language"]["FE"];
                document.querySelector(".fd").innerHTML = message["language"]["FD"];
                document.querySelector(".fedt").innerHTML = message["language"]["DATEFE"];
                document.querySelector(".fefun").innerHTML = message["language"]["FEF"];
                document.querySelector(".fdf").innerHTML = message["language"]["FDF"];
                document.querySelector(".dtfd").innerHTML = message["language"]["DATEFD"];
                document.querySelector(".name").innerHTML = message["language"]["NAME"];
                document.querySelector(".phonen").innerHTML = message["language"]["PHONE"];
                document.querySelector(".message").innerHTML = message["language"]["MESSAGE"];
                document.querySelector(".send").innerHTML = message["language"]["SEND"];
                document.querySelector(".dd").innerHTML = message["language"]["DD"];
                document.querySelector(".fr").innerHTML = message["language"]["FR"];
                document.querySelector(".eng").innerHTML = message["language"]["EN"];
                document.querySelector(".cat").innerHTML = message["language"]["CAT"];
                document.querySelector(".es").innerHTML = message["language"]["ES"];
                document.querySelector(".lang").innerHTML = message["language"]["LANGUAGE"];
                document.querySelector(".desc1").innerHTML = message["language"]["DESC1"];
                document.querySelector(".desc2").innerHTML = message["language"]["DESC2"];

            })
            .catch((error)  =>  {  console.log(error);  });        
        console.log("La petició ja s'ha disparat");
    } else {
        setCookie("en");
        setLanguage("language");
    }
}