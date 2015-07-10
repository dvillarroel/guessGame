//class guessGame

var guessGame = function(){};

    this.numberTurns = 0;
    this.words = ["A","B","C","D","E","F","G","I"];
    this.matrix = [[]];


guessGame.prototype.createTable = function(){

    //there are 16 spots, so we are going to generate a number from 1 to 16
    //   1, 2, 3, 4
    //   5, 6, 7, 8 ...
    var randomValue = 0;

    for(i = 1; i <= 16; i++)
    {
        for(j = 0; j < matrix.length; j++)
        {

            do {
                randomValue = Math.floor((Math.random() * 16) + 1);
                if(checkAvailabilityPosition(randomValue) == true)
                {


                }



                i++;
            }
            while ();


        }

    }



};

guessGame.prototype.setPosition = function(){


};

guessGame.prototype.checkAvailabilityPosition = function(x,y){

    if(!matrix[x][y])
        return true;
    else
        return false;


};

guessGame.prototype.printTable = function(){


};
