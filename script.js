const menu = document.querySelector("#menu_btn");
const exit = document.querySelector(".exit");
const overlay = document.querySelector(".overlay");

menu.addEventListener('click', () => {
    overlay.classList.toggle('hide-mobile');
});

exit.addEventListener('click', () => {
    overlay.classList.toggle('hide-mobile');
});