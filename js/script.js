menu = document.querySelector('.menu');
header = document.querySelector('.header__top');

menu.onclick = function () {
    header.classList.toggle('header__top--active');
};
