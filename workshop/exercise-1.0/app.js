// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>
// - By default, the <body> will be 0px tall. You can add a style in the
//   `<style>` tags to fill the viewport height.

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

//Register click anywhere on the screen
function registerClick() {
  const mainBloc = document.getElementById("main");
  const textToPage = document.createElement("p");
  textToPage.innerText = "Hello World!";
  mainBloc.appendChild(textToPage);
}
document.addEventListener("click", registerClick);

//body = 0px, add style to height
document.querySelector("body").style.height = "100vh";
