//Call the required class from the document
const innerCircle=document.querySelector(".inner-circle");

//Add the required event to be performed on certain class
innerCircle.addEventListener("click",darkMode);
function darkMode() {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}
