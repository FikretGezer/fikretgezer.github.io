import { games } from '../data/games.js';
import { robots } from '../data/robots.js';
import { webProjects } from '../data/web.js';


function ClickIt(value){
    localStorage.setItem('gameIndex', value);
    console.log(localStorage.getItem('gameIndex'));
}

const arrayName = localStorage.getItem('arrayName');
const arrayToShow = arrayName !== null ? arrayName : "webProjects";

let actualArray;
switch(arrayToShow)
{
    case "games":
        actualArray = games;
        break;
    case "robots":
        actualArray = robots;
        break;
    default:
        actualArray = webProjects;
        break;
}

const gamesContainer = document.querySelector('.games-container');
let endHTML = "";

actualArray.forEach((game, index) => {
    endHTML += `
        <div class="project">
            <a href="../pages/game-pages/project-page.html">
                <div class="project-image-container">
                    <img src="${game.projectImages[0]}">
                    <div class="more-info">
                        <p class="name">Go To The Details</p>
                    </div>
                </div>
            </a>
            <p>${game.projectName}</p>
        </div>
    `;
});

gamesContainer.innerHTML = endHTML;
const links = document.querySelectorAll('.project a');
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        ClickIt(index);
    });
});