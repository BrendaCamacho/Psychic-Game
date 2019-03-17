var computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var compGuess = computer[Math.floor(Math.random() * computer.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {
        if (userGuess === compGuess) {
            wins++;
            guesses = 9;
            guessChoices = [];
    }

    if (userGuess != compGuess){
        guesses --;
        guessChoices.push(userGuess);
    }

    if (guesses === 0) {
        guesses = 9;
        losses ++;
        guessChoices = [];
    }

    
    var html =
    "<h1> The Psychic Game </h1>" +
    "<p> Guess what letter I'm thinking of </p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guesses + "</p>" +
    "<p> Your guesses so far: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

}

};
