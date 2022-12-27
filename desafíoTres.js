//Constructor
function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//stockLimite define la cantidad de veces que va iterar el for. autos es el arreglo, únicamente declarado.
var stockLimite = 30;
var autos = [];
//Crear objeto por cada iteración y lo guarda dentro del array
for (var i = 0; i < stockLimite; i++) {
    //inicializa las variables de nuestro constructor, se le pide al usuario que ingrese los valores por teclado
    var marca = prompt("ingresa la marca del auto");
    var modelo = prompt("ingresa el modelo del auto");
    var annio = prompt("ingresa el annio del auto");
    //crea un objeto y lo agrega al inicio del array
    autos.unshift(new Auto(marca, modelo, annio));
}
//La iteración: recorre el array y lo imprime.
for (var i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}
//Metodo para poder mapear el array articulos. Se genera otro array en el que solo se piden los nombres del array articulos.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});