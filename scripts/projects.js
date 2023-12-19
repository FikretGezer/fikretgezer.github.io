const gameGifs = [
    "images/projects-pics/game-pics/gifs/hit-it-right.gif",
    "images/projects-pics/game-pics/gifs/animal-match.gif",
    "images/projects-pics/game-pics/gifs/no-name-survivor.gif",
    "images/projects-pics/game-pics/gifs/tetris.gif",
    "images/projects-pics/game-pics/gifs/leap-skyward.gif"
];
const uipathGifs = [
    "images/uipath-projects/gifs/gif_1.jpg",
    "images/uipath-projects/gifs/gif_2.jpg"
];

const gameProjects = document.querySelectorAll('.game-projects .project img');
// const uiPathProjects = document.querySelectorAll('.uipath-projects .project img');

let defaultSource = "";
let gifSource = "";
assignEvents(gameProjects, gameGifs);
// assignEvents(uiPathProjects, uipathGifs);

function assignEvents(array, gifs)
{
    array.forEach((project, index) => {

        project.addEventListener('mouseover', () => {
            defaultSource = project.src;
            gifSource = gifs.hasOwnProperty(index) ? gifs[index] : gifs[1];
            project.src = gifSource;
        });
        project.addEventListener('mouseout', () => {
            project.src = defaultSource;
        });
    });
}