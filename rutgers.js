let myLogoR = document.getElementById("logor");
let myLogoU = document.getElementById("logou");
let backGround = document.getElementById("background");

backGround.onclick = function() {
  let logoRw = ["rgb(204 0 51)", "rgb(255 255 255)"];
  let logoBw = ["rgb(0 0 0)", "rgb(255 255 255)"];
  let logoBr = ["rgb(0 0 0)", "rgb(204 0 51)"];

  let randomBw = logoBw[Math.floor(Math.random() * logoBw.length)];
  let randomBr = logoBr[Math.floor(Math.random() * logoBr.length)];
  let randomRw = logoRw[Math.floor(Math.random() * logoRw.length)];

  let randomRRotation = Math.random() * 360;
  let randomURotation = Math.random() * 360;

  let myBackgroundColor = ["rgb(204 0 51)", "rgb(0 0 0)", "rgb(255 255 255)"];

  let randomBackground = myBackgroundColor[Math.floor(Math.random() * myBackgroundColor.length)];

  backGround.style.backgroundColor = randomBackground;
  
  if (randomBackground == "rgb(255 255 255)"){
    myLogoR.style.color = randomBr;
    myLogoU.style.color = randomBr;
  } else if (randomBackground == "rgb(204 0 51)"){
    myLogoR.style.color = randomBw;
    myLogoU.style.color = randomBw;
  } else {
    myLogoR.style.color = randomRw;
    myLogoU.style.color = randomRw;
  };
  
  myLogoR.style.transform = `rotate(${randomRRotation}deg)`;
  myLogoU.style.transform = `rotate(${randomURotation}deg)`;
};