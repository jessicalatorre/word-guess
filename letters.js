//letter to guess will be underscore
//guessed will be boolean
//since we have two variable--which are also parameter, we'll need two functions in our class
function Letter(letterToGuess, guessedCorrectly) {
    this.letterToGuess = letterToGuess;
    this.guessed = guessedCorrectly;
    this.switchUnderScoreWithLetter = function () {
        if (this.guessedCorrectly) {
            return this.letterToGuess;
        }
        return '_'; //not don't need else becuase the function will stop if the correct letter is guessed/returned
    };

    // the letter is the user input and we want to check the user input with the actual letter
    this.checking = function (letter) {
        if(!this.guessedCorrectly) {
            // this.guessedCorrectly = this.letterToGuess == letter ? true: false;

            if(thisletterToGuess ==letter) {
                this.guessedCorrectly = true;
            } else {
                this.guessedCorrectly = false;
            }
            return this.guessedCorrectly; //returning the corresponding boolean for the letter the user input
        }

        this.switchUnderScoreWithLetter(); //we're invoking the function now to render underscore if the letter was incorrectly guessed
        return false;
    }
}

//export this file, so we can use it in word.js
//NOTE! this should be the name of the class, not the file
module.exports = Letter

