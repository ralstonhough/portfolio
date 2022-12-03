let menu = document.getElementById("menu");
let dropDown = document.getElementById("dropDown");
let content = document.getElementById("content");
let dropNavCats = document.getElementsByClassName("dropNavCat");
let dropDownOpacity = 0;

menu.onclick = function(){
    if (dropDownOpacity == 0) {
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
    } else {
        dropDown.style.opacity="0";
        dropDown.style.height ="0";
        content.style.overflow = "scroll";
        for (let cat of dropNavCats) {
            cat.classList.remove("unfolded");
            cat.classList.add("folded");
            setTimeout(function() {
                cat.style.opacity = "0";
            }, 300);
        };
        dropDownOpacity = 0;
    };
};

window.onresize = function(){
    dropDown.style.opacity="0";
    dropDown.style.height ="0";
    content.style.overflow = "scroll";
    for (let cat of dropNavCats) {
        cat.style.opacity = "0";
        cat.classList.remove("unfolded");
        cat.classList.add("folded");
    };
    dropDownOpacity = 0;
};