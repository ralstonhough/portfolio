let menu = document.getElementById("menu");
let dropDown = document.getElementById("dropDown");
let content = document.getElementById("content");
let homepages = document.getElementsByClassName("homepage");
let dropNavCats = document.getElementsByClassName("dropNavCat");
let dropDownOpacity = 0;
let canvas = document.getElementById("canvas");
let scrollableNavs = document.getElementsByClassName("scrollableNav");
let scrollableBars = document.getElementsByClassName("scrollableBar");
let scrollableGrids = document.getElementsByClassName("scrollableGrid");
let scrollableCats = document.getElementsByClassName("scrollableCat");
let scrollableWordmarks = document.getElementsByClassName("scrollableWordmark");
let warning = document.getElementById("warning");
let warningValue;

if (getCookie("warning_cookie") == null) {
    setTimeout(warningFade, 5000);
    setTimeout(setCookie("warning_cookie",warningValue,999),5500);
    warningValue = 0;
} else {
    warning.style.visibility = "hidden";
    warning.style.display = "none";
    warning.style.opacity = "0";
    console.log("There was already a cookie here.")
    console.log(document.cookie);
};

canvas.onwheel = function(event){
    if(innerWidth > innerHeight) {
        scrollAmount = event.deltaY;
        if (scrollAmount > 0) {
            for (let nav of scrollableNavs) {
                nav.style.height = "0";
            };
            for (let bar of scrollableBars) {
                bar.style.height = "0";
                bar.style.margin = "0 0 2vw 0";
            };
            for (let cat of scrollableCats) {
                cat.style.display = "none";
            };
            for (let grid of scrollableGrids) {
                grid.style.height = "92vh";
            };
            for (let wordmark of scrollableWordmarks) {
                wordmark.style.display = "none";
            };
        } else {
            for (let nav of scrollableNavs) {
                nav.style.height = "100%";
            };
            for (let bar of scrollableBars) {
                bar.style.height = "16%";
                bar.style.margin = "0 0 8vw 0";
            };
            for (let cat of scrollableCats) {
                cat.style.display = "initial";
            };
            for (let grid of scrollableGrids) {
                grid.style.height = "80vh";
            };
            for (let wordmark of scrollableWordmarks) {
                wordmark.style.display = "initial";
            };
        };
    };
};

menu.onclick = function(){
    if (dropDownOpacity == 0) {
        activateDropDown();
    } else {
        deactivateDropDown();
    };
};

window.onresize = function(){
    dropDown.style.opacity="0";
    dropDown.style.height ="0";
    for (let homepage of homepages) {
        homepage.style.overflow = "clip";
    };
    for (let cat of dropNavCats) {
        cat.style.opacity = "0";
        cat.classList.remove("unfolded");
        cat.classList.add("folded");
    };
    dropDownOpacity = 0;
    for (let bar of scrollableBars) {
        bar.style.height = "16%";
    };
    for (let nav of scrollableNavs) {
        nav.style.height = "100%";
    };
    for (let cat of scrollableCats) {
        cat.style.display = "initial";
    };
    for (let grid of scrollableGrids) {
        grid.style.height = "80vh";
    };
    for (let wordmark of scrollableWordmarks) {
        wordmark.style.display = "initial";
    };
};

function warningDisable(){
    warning.style.visibility = "hidden";
    warning.style.display = "none";
};

function warningFade(){
    warning.style.opacity = "0";
    setTimeout(warningDisable, 500);
};

function activateDropDown() {
    menu.style.filter = "brightness(100%)";   
    dropDown.style.opacity="1";
    dropDown.style.height ="100%";
    content.style.visibility = "hidden";
    for (let cat of dropNavCats) {
        cat.classList.add("unfolded");
        cat.classList.remove("folded");
        setTimeout(function() {
            cat.style.opacity = "1";
        }, 300);
    };
    dropDownOpacity = 1;
};

function deactivateDropDown() {
    menu.style.filter = "brightness(50%)";
    dropDown.style.opacity="0";
    dropDown.style.height ="0";
    content.style.visibility = "visible";
    for (let homepage of homepages) {
        homepage.style.overflow = "clip";
    };
    for (let homepage of homepages) {
        homepage.style.overflow = "clip";
    };
    for (let cat of dropNavCats) {
        cat.classList.remove("unfolded");
        cat.classList.add("folded");
        cat.style.opacity = "0";
    };
    dropDownOpacity = 0;
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}