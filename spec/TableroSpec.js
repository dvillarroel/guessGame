// Spec for Tablero; TableroSpec.js

var Tablero = require('./../app/Tablero.js');

describe('Tablero', function(){
	
	var tableroablero;
	
	beforeEach(function(){
		tablero = new Tablero();
		tablero.create();
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
		for(i = 0; i < 21; i++)
		{	
			tablero.adivinar(5,4)
		}
		var actualResult = tablero.intentosAlcanzados();
		var expectedResult = true;
		expect(actualResult).toBe(expectedResult);
		});
	});		
	
/*	
	describe('Verify that part count is increase when the user guesses a position', function(){
	it('character is found', function(){
		
		var tableroCompleto = tablero.getTablero();
		console.log(tablero.mostrarTodo());
		for( i = 0; i <= 5; i++)
		{
			for( j = 0; j <= 5; j++)
			{
				//console.log("valor: " + tableroCompleto[i][j].valor);

				if(tableroCompleto[i][j].valor == "a")
				{
					tablero.adivinar(i, j);
				}
			}
		}
		console.log("imprimir numero " + tablero.getCountPar());
		var actualResult = tablero.getCountPar();
		var expectedResult = 1;
		expect(actualResult).toBe(expectedResult);
		});
	});

	*/

		

	
/*	describe('mostrar', function(){
	
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
	});*/

	
/*	describe('Invalid enter', function(){
	
	it('should not be a valid enter', function(){
			
		expect(function(){
			tablero.entradaValida(10, -2);
			}).toThrow('Error the enter is invalid');
		});
	});*/
		
/*	describe('the number of tryings was reached', function(){
	
		it('it should return false, if the tryings was not reached', function(){
			
		var actualResult = tablero.entradaValida(5, 4);
		var expectedResult = false;
		expect(actualResult).toBe(expectedResult);
		});
	});
	
	*/

	
	
	
});
	