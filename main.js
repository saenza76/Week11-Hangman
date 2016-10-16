var Word = require('./word.js');
var gameImport = require('./game.js');
var prompt = require('prompt');
var lettersGuessed = '';

prompt.start();

game = {
	lettersGuessed: '',
	wordsWon : 0,
	guessesRemaining : 10,
	currentWrd : null,
	startGame : function (wrd){
		this.resetGuessesRemaining();
		this.currentWrd = new Word.Word(gameImport.game.wordBank[Math.floor(Math.random()* gameImport.game.wordBank.length)]);
		this.currentWrd.getLetters();
		this.keepPromptingUser();
	},
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
            lettersGuessed += result.guessLetter;
		    console.log('  The letter you guessed is: ' + result.guessLetter);
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    if (findHowManyOfUserGuess === 0){
		    	console.log('You guessed wrong');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('You guessed right');

	    		if(self.currentWrd.didWeFindTheWord()){
			    	console.log('You Won!');
			    	return;n
			    }
		    }

		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    console.log('Letters you guessed already: ' + lettersGuessed);

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found === false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining === 0){
		    	console.log('Game over! The word was: ', self.currentWrd.word);
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}
};

game.startGame();