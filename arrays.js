var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
// (4) ['Manzana', 'Platano', 'Cereza', 'Fresa']
console.log(frutas.length);

console.log(frutas[2]);
// Cereza
var masFrutas = frutas.push("Uvas");
// Agrega elementos al final del array
frutas
// (5) ['Manzana', 'Platano', 'Cereza', 'Fresa', 'Uvas']
console.log(frutas[4])

var ultimo = frutas.pop("Uvas");
// pop elimina el ultimo elemento del array
frutas
// (4) ['Manzana', 'Platano', 'Cereza', 'Fresa']
var nuevaLongitud = frutas.unshift("Uvas");
// Agrega el elemento al inicio del array
frutas
// (5) ['Uvas', 'Manzana', 'Platano', 'Cereza', 'Fresa']
var borrarFurta = frutas.shift("Uvas");
// elimina el primer elemento de un array
var posicion = frutas.indexOf("Cereza");
// metodo que ayuda a ver la posicion de un elemento array