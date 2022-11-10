let heroImage = document.getElementById("heroImage");
let contacts = document.getElementsByClassName("contact");
let menu = document.getElementById("menu");

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

for (let contact of contacts) {
    contact.onmouseover = function(){
        this.style.transform = "scale(1.1,1.1)";
    };
    contact.onmouseleave = function(){
        this.style.transform = "scale(1,1)";
    };
};