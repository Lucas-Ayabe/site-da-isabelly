const select = (selectors) => document.querySelector(selectors);
const selectAll = (selectors) => document.querySelectorAll(selectors);

const navigation = select('.navigation');
const hamburger = select('.hamburger');
const menu = select('.menu');
const themeToggler = select('#theme-toggler[data-theme]');

const navigationFloatingClass = '-floating';
const menuOpenClass = '-open';

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 30) {
        navigation.classList.add(navigationFloatingClass);
    } else {
        navigation.classList.remove(navigationFloatingClass);
    }
});

themeToggler.addEventListener('click', () => {
    const theme = themeToggler.dataset.theme;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    themeToggler.dataset.theme = newTheme;
    themeToggler.innerHTML = newTheme;
    document.documentElement.classList.toggle('dark-theme');
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle(menuOpenClass);
    menu.classList.toggle(menuOpenClass);
});
