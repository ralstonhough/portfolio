let secondCircle = document.getElementById("secondCircle");
let minuteCircle = document.getElementById("minuteCircle");
let hourCircle = document.getElementById("hourCircle");
let dayCircle = document.getElementById("dayCircle");

setInterval(function() {
  let time = new Date();
  let milliseconds = time.getMilliseconds();
  let circleSizer = map(milliseconds,0,1000,0,100);
  
  secondCircle.style.height = circleSizer + "vh";
  secondCircle.style.width = circleSizer + "vh";
},1);

setInterval(function() {
  let time = new Date();
  let seconds = time.getSeconds();
  let circleSizer = map(seconds,0,60,0,100);
  
  minuteCircle.style.height = circleSizer + "vh";
  minuteCircle.style.width = circleSizer + "vh";
},1);

setInterval(function() {
  let time = new Date();
  let minutes = time.getMinutes();
  let circleSizer = map(minutes,0,60,0,100);
  
  hourCircle.style.height = circleSizer + "vh";
  hourCircle.style.width = circleSizer + "vh";
},1);

setInterval(function() {
  let time = new Date();
  let hours = time.getHours();
  let circleSizer = map(hours,0,24,0,100);
  
  dayCircle.style.height = circleSizer + "vh";
  dayCircle.style.width = circleSizer + "vh";
},1);












//NO TOUCH//
function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}