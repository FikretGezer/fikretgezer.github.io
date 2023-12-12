function ClickIt(value){
    localStorage.setItem('gameIndex', value);
    console.log(localStorage.getItem('gameIndex'));
}
const games = [
    "No Name Survivor",
    "Tetris"
];

const gamesContainer = document.querySelector('.games-container');
let endHTML = "";
games.forEach((game, index) => {
    endHTML += `<a onclick="ClickIt(${index})" href="../pages/game-pages/project-page.html">${game}</a>
    <br><br>`;

});
gamesContainer.innerHTML = endHTML;