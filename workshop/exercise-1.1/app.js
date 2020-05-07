// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
// Au début = looser
// Créer une intervale d'une seconde.
//       Évènement qui regarde les click dans le body
//       Click à l'intérieur de 1sec = winner

let isWinner = false;

setTimeout(function () {
  const myBody = document.querySelector("body");
  myBody.addEventListener("click", function () {
    isWinner = true;
    console.log(isWinner);
  });
}, 3000);
document.querySelector("body").style.height = "100vh";
