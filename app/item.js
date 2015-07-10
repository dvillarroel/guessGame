//class item

var itemGame = function(value, position, parPosition){};
this.position = position;
this.value=value;
this.parPosition=parPosition;
//value for status, 0 or 1.. if the status is 1, then it should be printed, and not considered
this.status = 0;

guessGame.prototype.showPosition = function(){

    return position;
};

guessGame.prototype.showValue = function(){

    return value;
};

guessGame.prototype.showParPosition = function(){

    return parPosition;
};

guessGame.prototype.showStatus = function(){

    return status;
};

guessGame.prototype.updateStatus = function(newValue){

    status = newValue;
};

module.exports = guessGame;

