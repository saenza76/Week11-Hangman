var Letter = function(inputLetter){
	this.character = inputLetter;
	this.appear = false;
	this.letterEdit = function(){
		if (this.appear === true){
			return this.character;
		} else {
			return '_';
		}
	};
};

exports.Letter = Letter;