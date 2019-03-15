var basketball = ["dunk", "steal", "zone", "crossover", "sonics", "assist", "rebound", "three", "dribbling", "fadewaway", "eurostep", "defense", "turnover", "forward"];
var randomWord

var game = {
    "attempts": 7,
    //letters that have been guessed
    "correctlyGuessedLetters": [],
    "incorrectlyGuessedLetters": [],
    //stores the value of the word being guessed
    "currentWord": [],
    //shows on display the letters that have been guessed
    // "guessWord": [],
    "remainingGuesses": [],
    "wins": 0,
    "startGame": false,
    "endGame": false,
}

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    if (game.startGame == false) {
        gameStart(letter)
    };
    compareUserLetter(letter);
    update();

}

function update() {
    var guessText = ""
    for (var i = 0; i < game.correctlyGuessedLetters.length; i++) {
        guessText += game.correctlyGuessedLetters[i];
    }
    document.getElementById("winCount").innerHTML = game.wins;
    document.getElementById("remainingGuesses").innerHTML = game.remainingGuesses;
    document.getElementById("incorrectlyGuessedLetters").innerHTML = game.incorrectlyGuessedLetters;
    document.getElementById("currentWord").innerHTML = guessText;

}

function gameStart(letter) {
    game.startGame = true;
    game.incorrectlyGuessedLetters = [];
    game.remainingGuesses = game.attempts;
    game.correctlyGuessedLetters = [];
    // game = initGame();
    randomWord = basketball[Math.floor(Math.random() * basketball.length)];
    console.log(randomWord + "<--randomWord(str), 48")
    game.currentWord = randomWord.split("");
    console.log(game.currentWord);
    for (var i = 0; i < game.currentWord.length; i++) {
        game.correctlyGuessedLetters.push(" _ ");
    }
    update();
}

function compareUserLetter(Letter) {
    var userGuess = false;

    for (var i = 0; i < game.currentWord.length; i++) {
        if (Letter === game.currentWord[i]) {
            userGuess = true;
        }
        console.log(userGuess)
    }

    if (userGuess) {
        for (var i = 0; i < game.currentWord.length; i++) {
            if (game.currentWord[i] === Letter) {
                game.correctlyGuessedLetters.push(" " + Letter +",")
            }
        }
    } else { 
        game.incorrectlyGuessedLetters.push(Letter)
    }
}
// if (game.correctlyGuessedLetters === game.currentWord) {
//     //FUNCTION FOR GAME WIN
//     Update();
// } else if (game.remainingGuesses === 0) {
//     game.startGame = false;
//     Update();
// }


// function win() {
//     // 

// }



