// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let spiderVerse = ["Tobey", "Andrew", "Tom"];

// const unaFuncion = (array) => {
//     console.log(array[0]);
//   };
const nombreSpider = function (array) {
    console.log(array[0]);
}
unaFuncion(spiderVerse);

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let frutas = ["Banana", "Manzana", "Durazno", "Pera"];

const elementos = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
elementos(frutas);

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function Persona(nombre, edad, fechaDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.fechaDeNacimiento = fechaDeNacimiento;
}

var personaUno = new Persona("Jorge", 27, 1990);

var mostrarElementos = function (nombreObjeto) {
    //Método Objetc.values funciona de manera parecida que un for in
    Object.values(nombreObjeto).forEach(function (elem) {
        console.log(elem);
    })
}
mostrarElementos(personaUno);

