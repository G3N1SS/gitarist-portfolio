window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main-section__navigation'),
    menuItem = document.querySelectorAll('.main-section__navigation-link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main-section__navigation_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('main-section__navigation_active');
        })
    })
})