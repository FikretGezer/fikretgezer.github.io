const gameGifs = [
    "images/projects-pics/game-pics/gifs/fruit-slasher.gif",
    "images/projects-pics/game-pics/gifs/animal-match.gif",
    "images/projects-pics/game-pics/gifs/no-name-survivor.gif",
    "images/projects-pics/game-pics/gifs/leap-skyward.gif",
    "images/projects-pics/game-pics/gifs/tetris.gif"
];

const gameProjects = document.querySelectorAll('.game-projects .project img');

let defaultSource = "";
let gifSource = "";
assignEvents(gameProjects, gameGifs);

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