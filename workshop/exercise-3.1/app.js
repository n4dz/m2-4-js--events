//Ajouter 20 buttons in main
//event = change couleur

const myMain = document.getElementById("main");

for (let index = 1; index <= 20; index++) {
  let myButton = document.createElement("button");
  myButton.id = "button-" + index;
  myButton.textContent = index;
  myButton.style.backgroundColor = "red";
  myButton.style.height = "40px";
  myButton.style.width = "40px";
  myMain.appendChild(myButton);
  myButton.addEventListener("click", function () {
    myButton.style.backgroundColor = "green";
  });
}
