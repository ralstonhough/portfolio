let heroImage = document.getElementById("heroImage");
let contacts = document.getElementsByClassName("contact");
let menu = document.getElementById("menu");
let unselected = document.getElementsByClassName("unselected");
let dropDown = document.getElementById("dropDown");
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

heroImage.onmouseover = function(){
    this.style.filter = "grayscale(0%)";
};

heroImage.onmouseleave = function(){
    this.style.filter = "grayscale(100%)";
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
        dropDown.style.visibility="visible";
        dropDown.style.display="block";
        dropDownOpacity = 1;
    } else {
        dropDown.style.opacity="0";
        dropDown.style.visibility="hidden";
        dropDown.style.display="none";
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