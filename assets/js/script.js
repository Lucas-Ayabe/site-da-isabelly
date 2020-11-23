const select = (selectors) => document.querySelector(selectors);
const selectAll = (selectors) => document.querySelectorAll(selectors);

const themeToggler = select('#theme-toggler[data-theme]');

themeToggler.addEventListener('click', () => {
    const theme = themeToggler.dataset.theme;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    themeToggler.dataset.theme = newTheme;
    themeToggler.innerHTML = newTheme;
    document.documentElement.classList.toggle('dark-theme');
});
