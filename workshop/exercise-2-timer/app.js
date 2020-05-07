// const myTime = document.getElementById("currentTime");
// const myStartButton = document.getElementById("start");
// const myStopButton = document.getElementById("stop");

// // const start = Date.now();

// // setInterval(function () {
// //   const millis = Date.now() - start;
// //   myTime.innerHTML = Math.floor(millis / 1000);
// // }, 20000);
// function display() {
//   let time = new Date();
//   document.getElementById("currentTime").innerHTML = time;
// }
// display();
// setInterval(display, 1000);

// myStopButton.addEventListener("click", function () {
//   myS;
// });
var counter = 0;
function countTime() {
  document.getElementById("currentTime").innerHTML = ++counter;
}
