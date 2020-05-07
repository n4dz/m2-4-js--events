const myMain = document.getElementById("main");

//modifier position top,left
for (let index = 1; index <= 20; index++) {
  let randomPositionTop = Math.random() * 60;
  let randomPositionLeft = Math.random() * 60;
  let myButton = document.createElement("button");
  myButton.id = "button-" + index;
  myButton.textContent = index;
  myButton.style.backgroundColor = "red";
  myButton.style.height = "40px";
  myButton.style.width = "40px";
  myButton.style.position = "absolute";
  myButton.style.left = randomPositionLeft + "vw";
  myButton.style.top = randomPositionTop + "vh";
  myMain.appendChild(myButton);
  myButton.addEventListener("click", function () {
    if (myButton.style.backgroundColor === "green") {
      myButton.style.backgroundColor = "red";
    } else {
      myButton.style.backgroundColor = "green";
    }
  });
}
