//La actividad es hacer un código en el que pueda jugar piedra, papel o tijera contra el computador.
var operadorUno = "piedra";
var operadorDos = "tijera";
var operadorTres = "papel";

function juego(usuario, computador) {
    if (usuario === computador) {
        console.log("Empate");
    } else if (usuario === operadorUno && computador === operadorDos) {
        console.log("Ganaste");
    } else if (usuario === operadorDos && computador === operadorTres) {
        console.log("Ganaste");
    } else if (usuario === operadorTres && computador === operadorUno) {
        console.log("Ganaste");
    } else if (usuario === operadorUno && computador === operadorTres) {
        console.log("Perdiste");
    } else if (usuario === operadorDos && computador === operadorUno) {
        console.log("Perdiste");
    } else if (usuario === operadorTres && computador === operadorDos) {
        console.log("Perdiste");
    } else {
        console.log("Valor incorrecto, ingrese piedra, papel o tijera");
    }
}
juego(operadorUno, operadorTres);