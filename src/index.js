import './style.css';
import { homePage } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

function wipeOut() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
}

function page() {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');


    homeButton.addEventListener('click', () =>{
        wipeOut();
        homePage();
    })

    menuButton.addEventListener('click', () => {
        wipeOut();
        menu();
    })

    aboutButton.addEventListener('click', () => {
        wipeOut();
        about();
    })
    homePage();

}

page();