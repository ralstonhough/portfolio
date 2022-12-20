let showOff = document.getElementById("showOff");
let flakes = document.getElementsByClassName("flake");
let colors = ["black","white"];
let colorMode = "BnW";
let flakeSize = 20;
let showOffPos = showOff.getBoundingClientRect();
let showOffTop = showOffPos.top;
let showOffLeft = showOffPos.left;

showOff.onmouseover = function(e){
    let newFlake = document.createElement("DIV");
    newFlake.classList.add("flake");
    newFlake.style.top = `${e.clientY - showOffTop - (flakeSize/2)}px`;
    newFlake.style.left = `${e.clientX - showOffLeft - (flakeSize/2)}px`;
    newFlake.style.height = `${flakeSize}px`;
    newFlake.style.width = `${flakeSize}px`;
    showOff.appendChild(newFlake);
    for (let flake of flakes) {
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        flake.style.background = randomColor;
    };
};

showOff.onclick = function(){
    if(colorMode == "BnW"){
        colors = ["blue","orange"];
        colorMode = "BnO";
    } else if (colorMode == "BnO") {
        colors = ["darkgray", "yellow"];
        colorMode = "DGnY";
    } else if (colorMode == "DGnY") {
        colors = ["lavender", "teal"];
        colorMode = "LnT";
    } else if (colorMode == "LnT") {
        colors = ["pink", "cyan"];
        colorMode = "PnC";
    } else if (colorMode == "PnC") {
        colors = ["red", "green"];
        colorMode = "RnG";
    } else if (colorMode == "RnG") {
        colors = ["royalblue", "peachpuff"];
        colorMode = "RBnP";
    } else if (colorMode == "RBnP") {
        colors = ["gold", "purple"];
        colorMode = "GnP";
    } else if (colorMode == "GnP") {
        colors = ["lime", "aqua"];
        colorMode = "LnA";
    } else if (colorMode == "LnA") {
        colors = ["pink", "yellow"];
        colorMode = "PnY";
    } else if (colorMode == "PnY") {
        colors = ["black", "white"];
        colorMode = "BnW";
    };
    flakeSize *= 1.3;
    for (let flake of flakes) {
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        flake.style.background = randomColor;
        let flakeSave = flake.getBoundingClientRect();
        let flakeSaveX = flakeSave.left;
        let flakeSaveY = flakeSave.top;
        flake.style.width = `${flakeSize}px`;
        flake.style.height = `${flakeSize}px`;
        flake.style.top = `${flakeSaveY - showOffTop - (flakeSize*.1)}px`;
        flake.style.left = `${flakeSaveX - showOffLeft - (flakeSize*.1)}px`;
    };
};