// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

// Pista: puedes usar la función prompt de JavaScript.

function sumaDosMasDos(suma) {
    console.log("¿Cuanto es 2 + 2? ");
    suma = prompt("Ingrese el valor de la suma");
    if (suma != 4) {
        console.log("Te equivocaste");
        sumaDosMasDos();
    }else{
        console.log("Felicitaciones")
    }
}
sumaDosMasDos();