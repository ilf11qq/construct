const headerLinks = document.querySelector('.header__links');
const burger = document.querySelector('.burger__burger');
burger.addEventListener('click', () => {
    console.log(10);
    burger.classList.toggle('burger__burger--close');
    headerLinks.classList.toggle('header__links--active');
})