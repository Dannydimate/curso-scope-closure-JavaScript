// Global Scope
var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//cuando asignamos  y nunca declaramos la variable por defecto esa variable es global.
function countries() {
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);