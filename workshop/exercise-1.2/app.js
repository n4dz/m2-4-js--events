// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)

//Créer une variable qui génère chiffre entre 3 et 5 = random
//Mettre un timer
//Click entre 3 et 5 secondes = gagne sinon perd
let randomSeconds = Math.floor(Math.random() * 3 + 2);
let isWinner = false;

setTimeout(function () {
  const myBody = document.querySelector("body");
  myBody.addEventListener("click", function () {
    isWinner = true;
    console.log(isWinner);
  });
}, randomSeconds * 1000);
document.querySelector("body").style.height = "100vh";
