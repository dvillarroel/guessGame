// JavaScript Document

/* *
 * The class represents an item
 * in the table for the guess game
 * @param {string} valor
 *   The valor of the item
 */
var Item = function(valor) {
    this.valor = valor;
    this.guessed = false;
};

/* *
 * Displays the value of the item
 * if item has not been guesses it 
 * displays *
 */
Item.prototype.mostrar = function (){
         
    if (this.guessed){
        return this.valor;
    }
    else{
        return '*';  
    }
        
};

/* *
 * Returns the current value of the item
 */    
Item.prototype.mostrarValor = function (){
    return this.valor;
};

/* *
 * Change the current value of guessed to guessed
 */        
Item.prototype.adivinado = function (){
    this.guessed = true;
};

/* *
 * Returns the current value of guessed
 */            
Item.prototype.getGuessed = function (){
    return this.guessed;
};

module.exports = Item;
