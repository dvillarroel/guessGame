// Spec for Tablero; TableroSpec.js

var Item = require('./../app/Item.js');

describe('Item', function(){
	
	var itemTest;
	
	beforeEach(function(){
		itemTest = new Item('a');
	});
	
	afterEach(function(){
		itemTest = null;
	});

	describe('Verify Item object', function(){
	
		it('Item has the correct value', function(){
		
		var actualResult = itemTest.mostrarValor();
		var expectedResult = 'a';
		expect(actualResult).toBe(expectedResult);
		});
		
		it('Item has the correct value for guessed', function(){
		
		var actualResult = itemTest.getGuessed();
		var expectedResult = false;
		expect(actualResult).toBe(expectedResult);
		});
		
		it('Item shows * when it has not been guessed', function(){
		
		var actualResult = itemTest.mostrar();
		var expectedResult = '*';
		expect(actualResult).toBe(expectedResult);
		});
		
		it('Item shows the values when it has been guessed', function(){
		
		var actualResult = itemTest.mostrar();
		var expectedResult = '*';
		expect(actualResult).toBe(expectedResult);
		
		itemTest.adivinado();
		var actualResult = itemTest.mostrar();
		var expectedResult = 'a';
		expect(actualResult).toBe(expectedResult);
		});
		
	});

	
	
	
});
	
