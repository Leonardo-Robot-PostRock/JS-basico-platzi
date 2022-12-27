var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 2000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];
//este es un nuevo array en el que se agregan elementos filtrado del array articulos. En él, los elementos para poder agregarse deben cumplir la siguiente la funcion
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

// articulosFiltrados

// encuentra el articulo
var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});
//encuentra unicamente el nombre
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

//Confirma al usuario la existencia de articulos que valgan menos de $700. Solo regresa en valor booleano
var articulosBaratos = articulos.some(function (articulo) {
    return articulo <= 700;
});