const nav = document.querySelector('.header__row');
const triggerELement = document.querySelector('.hero__title');
const links = document.querySelectorAll('.nav-list__link');
const logo = document.querySelector('.logo');
const login = document.querySelector('.login');

function handleScroll () {
    if (window.scrollY >= triggerELement.offsetTop) {
        nav.classList.add('header__row--scrolling');
        logo.classList.add('logo--scrolling');
        login.classList.add('login--scrolling');
        links.forEach(link => {
            link.classList.add('nav-list__link-scrolling')
        });
    } else {
        nav.classList.remove('header__row--scrolling');
        logo.classList.remove('logo--scrolling');
        login.classList.remove('login--scrolling');
        links.forEach(link => {
            link.classList.remove('nav-list__link-scrolling')
        });
    }
};



const scrolling = window.addEventListener('scroll', handleScroll);

export default scrolling;