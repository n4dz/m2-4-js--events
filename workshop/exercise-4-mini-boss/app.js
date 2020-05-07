const myMain = document.getElementById("main");
const myStartButton = document.createElement("button");
myStartButton.textContent = "Start";
myMain.appendChild(myStartButton);

myStartButton.addEventListener("click", function () {
  myStartButton.remove();
  let randomNumber = Math.random() * 100;
  for (let index = 1; index <= randomNumber; index++) {
    let randomNumOfButton = document.createElement("button");
    randomNumOfButton.textContent = "new button";
    myMain.appendChild(randomNumOfButton);
    let timer = setTimeout(() => {
      randomNumOfButton.addEventListener("click", function () {
        alert("Win");
      });
    }, 3000);
    // setInterval(() => {
    //   clearInterval(timer);
    // }, 3000);
  }
});
