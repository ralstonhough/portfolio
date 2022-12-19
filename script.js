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

function activateDropDown() {
    menu.style.filter = "brightness(100%)";   
    dropDown.style.opacity="1";
    dropDown.style.height ="100%";
    content.style.overflow = "hidden";
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
    content.style.overflow = "scroll";
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
    content.style.overflow = "scroll";
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