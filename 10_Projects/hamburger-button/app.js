// First method
/* const buttonEl = document.querySelector('button');
const navEl = document.querySelector('nav');

const toggleNavBar = () => {
    navEl.classList.toggle('open');
}

buttonEl.addEventListener('click', toggleNavBar);
*/

// Option 2: Wrap your code in DOMContentLoaded

const nav = document.querySelector('nav');
const backdrop = document.getElementById('backdrop');

document.querySelector('button').addEventListener('click', () => {
    nav.classList.toggle('open');
    backdrop.classList.toggle('active');
});

backdrop.addEventListener('click', () => {
    nav.classList.remove('open');
    backdrop.classList.remove('active');
});

