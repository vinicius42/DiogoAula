const calculos = require('./calculos.js');

var altura = 4;
var largura = 7;

var area = calculos.calcularArea(largura, altura);

console.log(`Resultado: ${area} `)

calculos.america(5);
calculos.europa(5);
calculos.argentina(5);

calculos.superior(4, 10);

calculos.age(60);

var fibo = calculos.fibonacci(15);

