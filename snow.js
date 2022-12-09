let snow = document.getElementById("snow");
let box = document.getElementById("box");
let colors = ["black","white"];

for (let i=0; i<15001; i++){
  let flake = document.createElement("DIV");
  flake.classList.add("flake");
  snow.appendChild(flake);
};

for (let i=0; i<64; i++){
  let content = document.createElement("DIV");
  content.classList.add("content");
  box.appendChild(content);
};

function snowing(){
  let flakes = document.getElementsByClassName("flake");
  for (let flake of flakes){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    flake.style.background = randomColor;
  };
};

function boxSnow(){
  let contents = document.getElementsByClassName("content");
  for (let content of contents){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    content.style.background = randomColor;
  };
};

box.onmousemove = boxSnow;
snow.onmousemove = snowing;