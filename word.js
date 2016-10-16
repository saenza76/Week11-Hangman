var letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd;
	this.letterArr = [];
	this.found = false;
	this.getLetters = function(){
		for (var i = 0; i < this.word.length; i++){
			this.letterArr.push(new letter.Letter(this.word[i]));
		}
	};

	this.didWeFindTheWord = function(){
		var returnTrue = 0;
		for (var i = 0; i < this.letterArr.length; i++){
			if (this.letterArr[i].appear === true){
				returnTrue++;
			} else {
				return false;
			}
		}

		if (returnTrue === this.letterArr.length){
			this.found = true;
		} else {
			this.found = false;
		}
		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
          var whatToReturn = 0;
          for (var i = 0; i < this.letterArr.length; i++) {
               if (this.letterArr[i].character === guessLetter) {
                    this.letterArr[i].appear = true;
                    whatToReturn += 1;
               }
          }
          return whatToReturn;
	};

	this.wordRender = function(){
		var renderedString = "";
		for (var i = 0; i < this.letterArr.length; i++){
			renderedString += this.letterArr[i].letterEdit();
		}
		return renderedString;
	};
};

exports.Word = Word;