//class item

var itemGame = function(value, position, parPosition){};
this.position = position;
this.value=value;
this.parPosition=parPosition;
//value for status, 0 or 1.. if the status is 1, then it should be printed, and not considered
this.status = 0;

itemGame.prototype.showPosition = function(){

    return position;
};

itemGame.prototype.showValue = function(){

    return value;
};

itemGame.prototype.showParPosition = function(){

    return parPosition;
};

itemGame.prototype.showStatus = function(){

    return status;
};

itemGame.prototype.updateStatus = function(newValue){

    status = newValue;
};

module.exports = itemGame;

