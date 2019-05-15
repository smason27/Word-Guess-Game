


var basketball = ["dunk", "steal", "zone", "crossover", "sonics", "assist", "rebound", "three", "dribbling", "fadeaway", "eurostep", "defense", "turnover", "forward"];
var randomWord
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var game = {
    // "attempts": 7,
    "guessLetters": [],
    "correctlyGuessedLetters": [],
    "incorrectlyGuessedLetters": [],
    "currentWord": [],
    "remainingGuesses": 7,
    "wins": 0,
    "startGame": false,
    "endGame": false,
}

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    checkLetter(letter);
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
    document.getElementById("incorrectlyGuessedLetters").innerHTML = game.incorrectlyGuessedLetters.join(" ");
    document.getElementById("currentWord").innerHTML = guessText;

}

function gameStart(letter) {
    game.startGame = true;
    game.incorrectlyGuessedLetters = [];
    game.remainingGuesses = 7
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
        for (var j = 0; j < game.currentWord.length; j++) {
            if (game.currentWord[j] === Letter) {
                game.correctlyGuessedLetters[j] = Letter
            }
        }
        } else { 
            game.incorrectlyGuessedLetters.push(" " + Letter);
            game.remainingGuesses --;
    }
    arraysEqual();
    checkResult();
} 
function arraysEqual(a, b) {
    a = game.correctlyGuessedLetters
    b = game.currentWord
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
function checkResult() {
    console.log("hello")
    if(arraysEqual() === true) { 
        alert("you win");
        game.wins ++;
        gameStart();
    }
    if(game.remainingGuesses <= 0 && arraysEqual() === false) {
        alert("you suck")
        gameStart();
    }
}

function checkLetter(letter) {
    for(i = 0; i < alphabet.length; i++) {
        if(alphabet.indexOf(letter) === -1) {
            alert("please try another letter");
            
        } else {
            return;
        }
    }

    if(letter === game.incorrectlyGuessedLetters[i] || game.correctlyGuessedLetters) {
        alert("try another letter!")
    } else {
        return;
    }
    
}





