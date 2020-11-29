const curry = (fn, ...args) => {
    return fn.length <= args.length
        ? fn(...args)
        : curry.bind(null, fn, ...args);
};

const select = (selectors) => document.querySelector(selectors);
const selectAll = (selectors) => document.querySelectorAll(selectors);
const onEvent = curry((event) => (element) => (callback) => {
    return element.addEventListener(event, callback);
});

const onScroll = onEvent('scroll');
const onClick = onEvent('click');

const navigation = select('.navigation');
const hamburger = select('.hamburger');
const menu = select('.menu');
const themeToggler = select('#theme-toggler[data-theme]');

const navigationFloatingClass = '-floating';
const menuOpenClass = '-open';

const onScrollInWindow = onScroll(window);
const onClickInThemeToggler = onClick(themeToggler);
const onClickInHamburger = onClick(hamburger);

function toggleMenuIfScrolled() {
    if (window.pageYOffset > 30) {
        navigation.classList.add(navigationFloatingClass);
    } else {
        navigation.classList.remove(navigationFloatingClass);
    }
}

function toggleTheme() {
    const theme = themeToggler.dataset.theme;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    themeToggler.dataset.theme = newTheme;
    themeToggler.innerHTML = newTheme;
    document.documentElement.classList.toggle('dark-theme');
}

function toggleMenu() {
    hamburger.classList.toggle(menuOpenClass);
    menu.classList.toggle(menuOpenClass);
}

onScrollInWindow(toggleMenuIfScrolled);
onClickInThemeToggler(toggleTheme);
onClickInHamburger(toggleMenu);
