// Spec for Tablero; TableroSpec.js

var Tablero = require('./../app/Tablero.js');

describe('Tablero', function(){
	
	var tableroablero;
	
	beforeEach(function(){
		tablero = new Tablero();
		tablero.create();
		sizeTablero = 6;
	});
	
	afterEach(function(){
		tablero = null;
	});

	describe('Number of attempts is less than the max number of attempts', function(){
	
		it('player perform a valid anotation', function(){
		
		var actualResult = tablero.intentosAlcanzados(5, 4);
		var expectedResult = false;
		expect(actualResult).toBe(expectedResult);
		});
	});

	describe('verify if the user enters a valid position', function(){
	
		it('player enters a wrong position', function(){
		
		var actualResult = tablero.entradaValida(9, 8);
		var expectedResult = false;
		expect(actualResult).toBe(expectedResult);
		});
	});


	describe('Number of attempts is more than the max number of attempts', function(){
	
		it('player exceedes the numer of attemps', function(){
		for( var attemp = 0; attemp < 20; attemp++)
		{	
			tablero.adivinar(5,4);
			tablero.adivinar(5,3);
			
			
		}
		
		var actualResult = tablero.intentosAlcanzados();
		var expectedResult = true;
		expect(actualResult).toBe(expectedResult);
		});
	});		
	
	
	
	describe('Verify that part count is increase when the user guesses a position', function(){
	it('character is found', function(){
		
		var tableroCompleto = tablero.getTablero();
		var actualResult; 
 	    var expectedResult = 1;

         tablero.adivinar(5, 4);
         actualResult = tablero.getCountPar();
         expect(actualResult).toBe(expectedResult);

		});
	});

	
	describe('creacion', function(){
	
		it('Verify tablero is created', function(){
		
			var tablero2 = new Tablero();
			tablero2.create();
            expectedTablero = tablero2.getTablero();		
			expect(expectedTablero.length).toBe(sizeTablero);
		});
		
		it('Verify tablero size is correct', function(){
			
			var tablero2 = new Tablero();
			tablero2.create();
            expectedTablero = tablero2.getTablero();		
			expect(expectedTablero.length).toBe(sizeTablero);
			expect(expectedTablero[0].length).toBe(sizeTablero);
			expect(expectedTablero[1].length).toBe(sizeTablero);
			expect(expectedTablero[2].length).toBe(sizeTablero);
			expect(expectedTablero[3].length).toBe(sizeTablero);
			expect(expectedTablero[4].length).toBe(sizeTablero);
			expect(expectedTablero[5].length).toBe(sizeTablero);
		});
		
		it('Verify that values for tablero has been assigned', function(){
			
			var tablero2 = new Tablero();
			tablero2.create();
			res = false;
            expectedTablero = tablero2.getTablero();		
			for (var i=0 ; i< sizeTablero ; i++){
			  for (var j=0 ; i< sizeTablero ; i++){
			     if (expectedTablero[i][j].mostrarValor() == 'a' || expectedTablero[i][j].mostrarValor() == 'b' || expectedTablero[i][j].mostrarValor() == 'c' || expectedTablero[i][j].mostrarValor() == 'd' || expectedTablero[i][j].mostrarValor() == 'e' || expectedTablero[i][j].mostrarValor() == 'f' || expectedTablero[i][j].mostrarValor() == 'g' || expectedTablero[i][j].mostrarValor() == 'h' || expectedTablero[i][j].mostrarValor() == 'i' || expectedTablero[i][j].mostrarValor() == 'j' || expectedTablero[i][j].mostrarValor() == 'k' || expectedTablero[i][j].mostrarValor() == 'l' || expectedTablero[i][j].mostrarValor() == 'm' || expectedTablero[i][j].mostrarValor() == 'n' || expectedTablero[i][j].mostrarValor() == 'o' || expectedTablero[i][j].mostrarValor() == 'p' || expectedTablero[i][j].mostrarValor() == 'q' || expectedTablero[i][j].mostrarValor() == 'r' || expectedTablero[i][j].mostrarValor() == 's' || expectedTablero[i][j].mostrarValor() == 't' || expectedTablero[i][j].mostrarValor() == 'u' || expectedTablero[i][j].mostrarValor() == 'v' || expectedTablero[i][j].mostrarValor() == 'w' || expectedTablero[i][j].mostrarValor() == 'x' || expectedTablero[i][j].mostrarValor() == 'y' || expectedTablero[i][j].mostrarValor() == 'z'){
			        res = true;
			     }   
			     else{
			       res = false;
			     }
			      
			  }
			}
			
			expect(res).toBe(true);
			
		});
		
		
		
		it('Verify that values for tablero has the value guessed as false', function(){
			
			var tablero2 = new Tablero();
			tablero2.create();
			res = false;
            expectedTablero = tablero2.getTablero();		
			for (var i=0 ; i< sizeTablero ; i++){
			  for (var j=0 ; i< sizeTablero ; i++){
			     if (expectedTablero[i][j].getGuessed() == false){
			        res = true;
			     }   
			     else{
			       res = false;
			     }
			      
			  }
			}
			
			expect(res).toBe(true);
			
		});
		
	});
	

/*	
	describe('mostrar', function(){
	
		it('tablero should be showed', function(){
		
			var actualResult = tablero.mostrar();
			var expectedResult = [[]];			
			expect(actualResult).toBe(expectedResult);
		});
		
		it('tablero should show values too', function(){
			
			var actualResult = tablero.mostrarTodo();
			var expectedResult = [[]];
			expect(actualResult).toBe(expectedResult);
		});
	});
*/
	
  describe('Invalid enter', function(){
	
	it('should not be a valid enter', function(){
		expect(tablero.entradaValida(10, -2)).toBe(false);	
		
		});
	});
		
	describe('the number of tryings was reached', function(){
	
		it('it should return false, if the tryings was not reached', function(){
		
		var actualResult;
		var expectedResult = false;
		
		tablero.adivinar(5, 4);
		actualResult = tablero.intentosAlcanzados();
		expect(actualResult).toBe(expectedResult);
		});
	});
	
	
});
	
