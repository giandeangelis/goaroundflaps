//Script for opening and closing nav links on mobile version
const nav = document.querySelector('nav');
const hamburger = document.getElementById('hamburger-container')

const toggleNav = () => {
    nav.classList.toggle('expand');
}

hamburger.addEventListener('click', toggleNav);