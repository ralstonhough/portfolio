let warning = document.getElementById("warning");
let warningValue;
let warningStatus = getCookie("warning_cookie");

warningCheck;

window.onresize = warningCheck();

function warningCheck(){
    if (innerWidth > 820 && warningStatus == null){
        setTimeout(warningFade, 5000);
        setTimeout(setCookie("warning_cookie",warningValue,999),5500);
        warningValue = 1;
    } else {
        warning.style.visibility = "hidden";
        warning.style.display = "none";
        warning.style.opacity = "0";
    };
};

function warningFade(){
    warning.style.opacity = "0";
    setTimeout(warningDisable, 500);
};

function warningDisable(){
    warning.style.visibility = "hidden";
    warning.style.display = "none";
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    };
    return decodeURI(dc.substring(begin + prefix.length, end));
};