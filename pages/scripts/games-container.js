// import { games } from '../data/games.js';
// import { robots } from '../data/robots.js';
// import { webProjects } from '../data/web.js';

function ClickIt(value){
    localStorage.setItem('projectIndex', value);
    console.log(localStorage.getItem('projectIndex'));
}

const arrayName = localStorage.getItem('arrayName');

const nameParts = arrayName.split(' ');
let endTitle = "Fikret Gezer | ";

nameParts.forEach((part, index) => {

    endTitle +=
    part[0].toUpperCase()
    + part.slice(1, part.length).toLowerCase();

    if(index !== nameParts.length - 1)
        endTitle += " ";
});

document.title = endTitle;

let actualArray;

switch(arrayName)
{
    case "games":
        actualArray = games;
        break;
    case "robots":
        actualArray = robots;
        break;
    case "web projects":
        actualArray = webProjects;
        break;
    default:
        console.log("Error");
        break;
}

const header = document.querySelector('.section-name');
header.innerHTML = arrayName;

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

const gamesContainer = document.querySelector('.projects-container');
gamesContainer.innerHTML = endHTML;

const links = document.querySelectorAll('.project a');
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        ClickIt(index);
    });
});