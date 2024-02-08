const games = [
    {
        projectName: "Fruit Slasher",
        actualPlatforms: [
            {
                platform: "Google Play",
                link: "https://play.google.com/store/apps/details?id=com.FikretGezer.FruitSlasher"
            },
            {
                platform: "GitHub",
                link: "https://github.com/FikretGezer/FruitSlasher"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/fruit-slasher/1.jpg",
            "../../images/projects-pics/game-pics/fruit-slasher/1.jpg",
            "../../images/projects-pics/game-pics/fruit-slasher/2.jpg",
            "../../images/projects-pics/game-pics/fruit-slasher/3.jpg",
            "../../images/projects-pics/game-pics/fruit-slasher/4.jpg"
        ],
        actualExplanation: `
        <h3>What is this game about?</h3>
        Fruit Slasher is a clone of a known game Fruit Ninja. There is currently 1 mode in the game and the goal of the mode is slicing fruits as much as possible while avoiding bombs.
        End of the each round players earns some in game currency called "Stars" and experience to level up. Once players level up, some blade or some dojos will be unlocked and they can
        buy these items from the in game store with stars they own and players can see in the store, which level the items will be unlocked.
        <br><br>
        Also there are:
        <ol>
        <br>
        <li> • 10 different blades</li>
        <li> • 6 different dojos in the game.</li>
        </ol>
        <br>

        <h3>Background and Development</h3>

        I tried to analize what can I do and what I can't do before developing the game and wrote everything down.
        During the development I used OOP, implemented store, created a mission board, implement object pooling for fruits, bombs, effects etc., created different blades using unity's particle system,
        implement Event Manager using Observer Pattern and more.
        <ul>
        <br>
        <li> • Using the Google Play Games Services Plugin, I implemented a leaderboard to give access to the players to see what other players scores, implemented cloud save so players keep playing the game from the other devices without losing their progress and implemented achievement to give players little bit more challenges.</li>
        <li> • I used OOP to create a Event Manager. I created enum called Game Events and declared bunch of events to use subscribing from different scripts and when something happened to related to the event I broadcasted the event in the needed script.</li>
        <li> • Created a store for players to buy new blades and dojos to give them something to pursue. I created a scriptable object to store these items and added one by one after adjusting the parameters (sprites, unlock level, price, etc.). So players can see which item unlocks when and when players reach out the certain level for an item, they can buy it if they have enough Stars.</li>
        <li> • Used similar type of approach for the mission creating. I stored different type of missions in scriptable object and if there is no active missions, game randomly select 3 different mission and assign them on the board. They will stay there until players complete them.</li>
        <li> • Implemented pooling system to avoid performance problems by creating and destroying the reusable objects.</li>
        <li> • Created simple animations for the menus and buttons.</li>
        <li> • Tried to created dynamic UIs with default Unity components like Layout groups.</li>
        <li> • Implemented beginner guide to show players around by using inverted mask with materials.</li>
        <li> • and more...</li>
        </ul>
        `,
        projectVideo: "https://www.youtube.com/embed/6Oanf6x0FjY"
    },

    {
        projectName: "Animal Match",
        actualPlatforms: [
            {
                platform: "Google Play",
                link: "https://play.google.com/store/apps/details?id=com.FikretGezer.AnimalMatch"
            },
            {
                platform: "GitHub",
                link: "https://github.com/FikretGezer/CloneCrash"
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
        <li>• After the matches, I moved the board and spawned new pieces(This could be done with object pooling for the better performance).</li>
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
        projectName: "No Name Survivor",
        actualPlatforms: [
            {
                platform: "Itch.io",
                link: "https://fikretgezer.itch.io/no-name-survivors"
            },
            {
                platform: "GitHub",
                link: "https://github.com/FikretGezer/NoNameSurvivor"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/no-name-survivor/1.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/1.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/2.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/3.jpg",
            "../../images/projects-pics/game-pics/no-name-survivor/4.jpg"
        ],
        actualExplanation: `
        <h3>What is this game about?</h3>
        This game is the result of my excessive playtime with a game called Brotato. Basically, this is a shoot'em up game where the goal is to survive 10 consecutive rounds of enemy waves and
        upgrading the stats using the money dropped by defeated enemies and equip new guns. At the end of each round, players have a rest period during which they can select new weapons or items to enhance their stats throughout the run.
        Players can choose only 6 weapons, and these weapons cannot be upgraded, so players must choose wisely. Additionally, each weapon is represented by a new character, spawning on the map when selected.
        <br><br>
        There are three types of enemies in the game: normal ones, dashers, and shooters:
        <ol>
        <br>
        <li> • Normal enemies attempt to get close to the characters to inflict damage.</li>
        <li> • Dashers try to approach characters and dash at them if they get close enough.</li>
        <li> • Shooters follow the players until they are in range and then shoot with a rifle.</li>
        </ol>
        <br>
        Also the spawn rates of enemies change with each round.
        <br><br>

        <h3>Background and Development</h3>

        Creating No Name Survivor taught me various skills, including implementing OOP, creating a mini-map, developing a dynamic store, and incorporating stats that affect the players. To clarify further:
        <ul>
        <br>
        <li> • I used OOP to create different enemies and guns, avoiding code repetition and allowing easy modification of parameters or functions within one script used by similar objects. For instance, I centralized code for enemy behavior in one script and inherited enemy types from it. The use of abstract functions facilitated easy control over being hit by these enemies.</li>
        <li> • While not essential, I implemented a mini-map to explore its functionality and provide players with a vision of their surroundings.</li>
        <li> • Weapons and items are essential in these types of games. I utilized Scriptable Objects to define various weapons and items. After each round, a store appears, offering players options to strengthen their characters.</li>
        </ul>
        `,
        projectVideo: "https://www.youtube.com/embed/CezxOliOeV8"
    },

    {
        projectName: "Leap Skyward",
        actualPlatforms: [
            {
                platform: "Itch.io",
                link: "https://fikretgezer.itch.io/leap-skyward"
            },
            {
                platform: "GitHub",
                link: "https://github.com/FikretGezer/LeapSkyward"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/leap-skyward/new/1.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/1.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/2.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/3.jpg",
            "../../images/projects-pics/game-pics/leap-skyward/new/4.jpg",
        ],
        actualExplanation: `
        <h3>What is this game about?</h3>
        Leap Skyward is a score oriented game with a pixel art style.
        <ul>
        <br>
        <li> • The goal of the players is to jump between platforms that have different speeds without falling down.</li>
        <li> • Each time players jump on a platform, the timer starts, and within the next successful jump without exceeding the timer, it will be refilled again, allowing players to make combo jumps.</li>
        <li> • Every time players successfully jump on a platform, they earn points. At the end of every combo, players earn extra points, which are equal to the jump count multiplied by the successful jump point.</li>
        <li> • The ultimate goal is to achieve the highest score possible while avoiding falling off the screen.</li>
        </ul>
        <br><br>

        <h3>Background and Development</h3>
        I wasn't new to character movements and physics, but I hadn't used them for a long time. To refresh my memory, I created this game. The things that I did include:
        <ul>
        <br>
        <li>&nbsp;&nbsp;&nbsp; • Implemented physics-based jumping and movement. I also aimed to make the jumping similar to Mario's style, where the character falls faster than it jumps, and pressing the jump key more results in the character gaining more height.</li>
        <li>&nbsp;&nbsp;&nbsp; • Made the character stay on the platform by parenting the character to the platform.</li>
        <li>&nbsp;&nbsp;&nbsp; • Implemented the endless looped background and platforms so players can achieve the highest score possible.</li>
        </ul>
        `,
        projectVideo: "https://www.youtube.com/embed/jAHrNs4WXJ8"
    },

    {
        projectName: "Tetris",
        actualPlatforms: [
            {
                platform: "Itch.io",
                link: "https://fikretgezer.itch.io/tetris-game"
            },
            {
                platform: "GitHub",
                link: "https://github.com/FikretGezer/TetrisGame"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/tetris/1.jpg",
            "../../images/projects-pics/game-pics/tetris/1.jpg",
            "../../images/projects-pics/game-pics/tetris/2.jpg",
            "../../images/projects-pics/game-pics/tetris/4.jpg",
            "../../images/projects-pics/game-pics/tetris/3.jpg"
        ],
        actualExplanation: `
        <h3>What is this game about?</h3>
        <ul>
        <li> • Tetris is a classic arcade game. It's actually one of 4 the horsemen(Tetris, Breakout, Mario, Pacman) as I called. The reason I called them like this is, all of these games teach different aspect of the game development.</li>
        <li> • Players' goal is creating perfectly and horizontally aligned lines without any gaps with random shaped falling blocks. As blocks fall, player can rotate or move them inside of the board and each time players create a perfect horizontal line, that line dissapears and players earn points.</li>
        <li> • Primary objective is to keep the board clean as much possible and preventthe blocks reaching the top of the screen.</li>
        </ul>
        <br>

        <h3>Background and Development</h3>
        &nbsp;&nbsp;&nbsp; Creating the Tetris taught me the some fundamental things in the game development. For example, I had never created a scoreboard until I made Tetris. And also I had to figure out;
        <ul>
        <br>
        <li>&nbsp;&nbsp;&nbsp; • How to create dynamic sized boards</li>
        <li>&nbsp;&nbsp;&nbsp; • How to keep blocks inside of the board while moving and rotating them</li>
        <li>&nbsp;&nbsp;&nbsp; • How to identify perfect lines before destroying them</li>
        <li>&nbsp;&nbsp;&nbsp; • How to increase score with different accomplishments like clearing a line, how long a player played, how many blocks the player used.</li>
        </ul>
        `,
        projectVideo: "https://www.youtube.com/embed/4iMr9QKEr9s"
    },

    {
        projectName: "Hit It Right",
        actualPlatforms: [
            {
                platform: "Google Play",
                link: "https://play.google.com/store/apps/details?id=com.DarkSpies.HITITRIGHT"
            },
            {
                platform: "GitHub",
                link: "https://github.com/FikretGezer/HitItRight"
            }
        ],
        projectImages: [
            "../../images/projects-pics/game-pics/hit-it-right/new/1.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/1.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/2.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/4.jpg",
            "../../images/projects-pics/game-pics/hit-it-right/new/5.jpg",
        ],
        actualExplanation: `
        <h3>What is this game about?</h3>
        &nbsp;&nbsp;&nbsp;Hit It Right is a score oriented mobile game also it is the first game I created on Unity and published on Google Play.
        <br><br>

        <h3>How the game works?</h3>
        <br>
        <h4>Movements</h4>
        <ul>
        <li>• Movements are really basic.</li>
        <li>• There are two non-visible buttons on the screen: one on the right and the other on the left;</li>
        <ul>
        <li>&nbsp;&nbsp;&nbsp; ○ The left button controls the ball's up and down movements.</li>
        <li>&nbsp;&nbsp;&nbsp; ○ The right button controls the ball's left and right movements.</li>
        </ul>
        </ul>
        <br>

        <h4>Scoring and Gameplay</h4>
        <ul>
        <li>• Each time players hit a colorful brick or wall with the ball that matches the ball's color, players earn 1 point.</li>
        <li>• After hitting the correct brick or wall, both the ball's and the brick's color change.</li>
        <li>• If players hit the wall with the ball that doesn't match the ball's color, the game will be over.</li>
        </ul>
        `,
        projectVideo: "https://www.youtube.com/embed/obtmfchX4nE"
    }
];