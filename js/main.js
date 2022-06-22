const menu = document.querySelector(".menu");
const openButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".menu__close");
const about = document.querySelector(".about-list__item");
const socials = document.querySelector(".socials-list__item");
const aboutDropdown = document.querySelector(".about-list__dropdown");
const socialsDropdown = document.querySelector(".socials-list__dropdown");

openButton.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
    openButton.classList.toggle("header__burger--hide");
});

closeButton.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
    openButton.classList.toggle("header__burger--hide");
});

about.addEventListener("click", () => {
    aboutDropdown.classList.toggle("about-list__dropdown--active");
});
socials.addEventListener("click", () => {
    socialsDropdown.classList.toggle("socials-list__dropdown--active");
});
