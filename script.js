let heroImage = document.getElementById("heroImage");
let contacts = document.getElementsByClassName("contact");
let menu = document.getElementById("menu");
let unselected = document.getElementsByClassName("unselected");
let dropDown = document.getElementById("dropDown");
let content = document.getElementById("content");
let dropNavCats = document.getElementsByClassName("dropNavCat");
let dropDownOpacity = 0;

for (let target of unselected) {
    target.onmouseover = function(){
        this.style.textDecoration = "underline";
        this.style.textUnderlineOffset = "8px";
    };
    target.onmouseleave = function(){
        this.style.textDecoration = "none";
    };
};

menu.onmouseover = function(){
    this.style.transform = "scale(1.1,1.1)";
};

menu.onmouseleave = function(){
    this.style.transform = "scale(1,1)";
};

menu.onclick = function(){
    if (dropDownOpacity == 0) {
        dropDown.style.opacity="1";
        dropDown.style.height ="100%";
        content.style.overflow = "hidden";
        for (let cat of dropNavCats) {
            cat.style.visibility = "visible";
            cat.style.opacity = "1";
            cat.style.display = "inline";
        };
        dropDownOpacity = 1;
    } else {
        dropDown.style.opacity="0";
        dropDown.style.height ="0";
        content.style.overflow = "scroll";
        for (let cat of dropNavCats) {
            cat.style.visibility = "hidden";
            cat.style.opacity = "0";
            cat.style.display = "none";
        };
        dropDownOpacity = 0;
    };
};

for (let contact of contacts) {
    contact.onmouseover = function(){
        this.style.transform = "scale(1.1,1.1)";
    };
    contact.onmouseleave = function(){
        this.style.transform = "scale(1,1)";
    };
};

window.onresize = function(){
    dropDown.style.opacity="0";
    dropDown.style.height ="0";
    content.style.overflow = "scroll";
    for (let cat of dropNavCats) {
        cat.style.visibility = "hidden";
        cat.style.opacity = "0";
        cat.style.display = "none";
    };
    dropDownOpacity = 0;
};