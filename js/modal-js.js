const modalOpenButton = document.getElementById("modal-open-button");
const modalCloseButton = document.getElementById("modal-close-button");
const isOpen = document.getElementById("modal");



const hamburgerOpenButton = document.getElementById("hamburger-open-button");
const hamburgerCloseButton  = document.getElementById("hamburger-close-button");
const hamburgerMenu        = document.getElementById("hamburger-header");

modalCloseButton.addEventListener("click", function () {
    isOpen.classList.add("is-open");
});

modalOpenButton.addEventListener("click", function () {
    isOpen.classList.remove("is-open");
});





hamburgerCloseButton.addEventListener("click", function () {
    hamburgerMenu.classList.add("is-open");
});

hamburgerOpenButton.addEventListener("click", function () {
    hamburgerMenu.classList.remove("is-open");
});