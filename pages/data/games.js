const games = [
    {
        id: 0,
        projectName: "Hit It Right",
        actualPlatforms: [
            {
                platform: "Google Play",
                link: "https://play.google.com/store/apps/details?id=com.DarkSpies.HITITRIGHT"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/hit-it-right/new/1.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/1.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/2.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/4.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/5.jpg",
        ],
        actualExplanation: "",
        projectVideo: "https://www.youtube.com/embed/obtmfchX4nE"
    },
    {
        id: 1,
        projectName: "Animal Match",
        actualPlatforms: [
            {
                platform: "Google Play",
                link: "https://play.google.com/store/apps/details?id=com.FikretGezer.AnimalMatch"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/animal-match/new/1.jpg",
            "../../images/projects-pics/game-pics/animal-match/new/1.jpg",
            "../../images/projects-pics/game-pics/animal-match/new/2.jpg",
            "../../images/projects-pics/game-pics/animal-match/new/4.jpg",
            "../../images/projects-pics/game-pics/animal-match/new/5.jpg",
        ],
        actualExplanation: `
        <h3>What is this game about?</h3>
        &nbsp;&nbsp;&nbsp;Clone Crash is basically a Match 3 game that I tried to build after seeing these kinda games being popular around the world.
        <br><br>

        <h3>How the game works?</h3>
        <br>
        <h4>Detecting Matches</h4>
        <ul>
        <li>• I added tags each one the pieces.</li>
        <li>• When players swipe towards any direction, I searched horizontal and vertical lines that contains the swiped pieces and if there is any matches after swiping, I added them in a matched list, if they're match of 4 or 5, I spawn special pieces like color, row, column bomb and I destroyed the matched ones.</li>
        <li>• Afte the matches, I moved the board and spawned new pieces. (This could be done with object pooling for the better performance.)</li>
        <li>• If there is not a match, I swiped back the pieces.</li>
        <li>• But there was an issue which is what if players matched 4 or 5 pieces when they swiped but matches are not in the same line. I wrote another code block for this to be able to detect if matches are in the same line. And if they are, I'd spawned a special piece.</li>
        <li>• During this process I made sure that players won't be able to swipe another piece while this process on going.</li>
        <li>• Also sometimes there was another issue appearing whichi is there were no possible move on the board. If this occurs, I wrote a code to suffle the board.</li>
        <li>• And lastly write a code block to detect possible matches to show players if they stuck during the game.</li>
        </ul>
        <br>

        <h4>Levels</h4>
        <ul>
        <li>• I created scriptable objects for levels and also another scriptable object to control levels easily while loading or doing something else.</li>
        <li>• Each level object contains;</li>
        <ul>
        <li>&nbsp;&nbsp;&nbsp; ○ Which pieces can be spawned because pieces spawns randomly</li>
        <li>&nbsp;&nbsp;&nbsp; ○ Which tiles can be spawned like concrete (Breakable and doesn't contain any piece inside of it), ice (Breakable and contains a piece inside of it but pieces can't be moved), jelly (Breakable and contains a piece inside of it and pieces can be moved) or empty tiles
        <li>&nbsp;&nbsp;&nbsp; ○ What's the layout of the board (5x5, 5x7, etc.)
        <li>&nbsp;&nbsp;&nbsp; ○ How many moves players have
        <li>&nbsp;&nbsp;&nbsp; ○ What are the objectives
        </ul>
        </ul>
        <br>

        <h4>Loading and Saving</h4>
        <ul>
        <li>• I created a class to hold level indexes and other things like sound effects, musics and their volumes, etc.</li>
        <li>• I created an instance from this class.</li>
        <li>• If players passes the level, I was getting the current level's index and increasing it one to unlock the new level using the instance of the class (this will only works if there is another level in level container scriptable object, if there is no other level, there won't be any increasing).</li>
        <li>• I did the same thing for the sounds too.</li>
        <li>• After all of this, I created a script to save this data on a local path using IO operations and Binary Formatters.</li>
        <li>• This saving was working when application closed or players switched between different scenes. And everytime players opens the game, game was detecting the save file and loading on the start.</li>
        </ul>
        <br>

        <h4>Other Things</h4>
        <h5>Assets</h5>
        <ul>
        <li>• <a href="https://assetstore.unity.com/packages/vfx/particles/hyper-casual-fx-200333" target="_blank" style="color: cyan;">Hyper Casual FX</a> by Lana Studio</li>
        <li>• <a href="https://assetstore.unity.com/packages/vfx/particles/cartoon-fx-remaster-free-109565" target="_blank" style="color: cyan;">Cartoon FX Remaster Free FX</a>  by Jean Moreno</li>
        <li>• <a href="https://free-game-assets.itch.io/free-monsters-game-assets" target="_blank" style="color: cyan;">Free Monsters Game Assets FX</a>  by CraftPix</li>
        </ul>
        `,
        projectVideo: "https://www.youtube.com/embed/FgOGoUf1bzg"
    },
    {
        id: 2,
        projectName: "No Name Survivor",
        actualPlatforms: [
            {
                platform: "Itch.io",
                link: "https://fikretgezer.itch.io/no-name-survivors"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/no-name-survivor/1.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/1.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/2.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/3.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/4.jpg"
        ],
        actualExplanation: `&nbsp;&nbsp;&nbsp;Have you ever been so engrossed in a game that it sparked your creativity to venture into game development yourself?
        That's exactly what happened to me when I was enjoying playing Brotato.
        The game was not just entertaining but also served as a muse for me to experiment with its mechanics and create a whole new gaming experience.
        <br><br>

        <span style="font-weight:bold">Game Overview:</span>
        <br>
        &nbsp;&nbsp;&nbsp;The result of this inspiration is a thrilling game that promises an adrenaline-packed journey.
        Brace yourself for a challenge as you navigate through 10 waves of intense gameplay.
        <br><br>


        <span style="font-weight:bold">Controls:</span>
        <br>
        &nbsp;&nbsp;&nbsp;
        To conquer the waves, you'll need to master the controls.
        Whether you prefer the classic W/A/S/D or the Arrow Keys, the choice is yours.
        Precision is key, so get ready to maneuver with finesse.
        <br><br>

        <span style="font-weight:bold">Game Features:</span>
        <br>
        &nbsp;&nbsp;&nbsp;
        Dive into a world of diversity with a vast array of elements at your disposal. Here's a glimpse of what awaits you:
        <br><br>

        <span style="font-weight:bold">Weapons:</span>
        <br>
        &nbsp;&nbsp;&nbsp;
        Arm yourself with a whopping 25 different weapons, each with its own unique strengths and strategies. From blazing firearms to melee mayhem, choose your arsenal wisely.
        <br><br>

        <span style="font-weight:bold">Items:</span>
        <br>
        &nbsp;&nbsp;&nbsp;
        Enhance your gameplay with 10 different items strategically placed throughout the waves. Power-ups, health boosts, and tactical tools await those who are vigilant and quick-witted.
        <br><br>

        <span style="font-weight:bold">Enemies:</span>
        <br>
        &nbsp;&nbsp;&nbsp;
        Face off against 3 different types of enemies, each presenting a distinct challenge. Learn their patterns, adapt your tactics, and emerge victorious.
        <br><br>

        &nbsp;&nbsp;&nbsp;Are you up for the challenge? The waves are waiting, and victory is within reach for those who dare to embrace the adventure.
        Get ready to immerse yourself in a gaming experience where skill, strategy, and a bit of luck will determine your triumph.
        Good luck, and may your gaming journey be as exhilarating as the inspiration that birthed it!`,
        projectVideo: "https://www.youtube.com/embed/CezxOliOeV8"
    },
    {
        id: 3,
        projectName: "Tetris",
        actualPlatforms: [
            {
                platform: "Itch.io",
                link: "https://fikretgezer.itch.io/tetris-game"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/tetris/1.jpg",
            "../../images/projects-pics/game-pics/tetris/1.jpg",
            "../../images/projects-pics/game-pics/tetris/2.jpg",
            "../../images/projects-pics/game-pics/tetris/4.jpg",
            "../../images/projects-pics/game-pics/tetris/3.jpg"
        ],
        actualExplanation: "",
        projectVideo: "https://www.youtube.com/embed/4iMr9QKEr9s"
    },
    {
        id: 4,
        projectName: "Leap Skyward",
        actualPlatforms: [
            {
                platform: "Itch.io",
                link: "https://fikretgezer.itch.io/leap-skyward"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/leap-skyward/new/1.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/1.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/2.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/3.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/4.jpg",
        ],
        actualExplanation: "",
        projectVideo: "https://www.youtube.com/embed/jAHrNs4WXJ8"
    }
];