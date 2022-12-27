//Esta es una actividad en el que se debe hacer un juego con la sentencia switch
var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";
function play(usuario, computador) {
    switch (true) {
        case (usuario === op1 && computador === op3):
            console.log("Ganaste!");
            break;
        case (usuario === op2 && computador === op1):
            console.log("Ganaste!");
            break;
        case (usuario === op3 && computador === op2):
            console.log("Ganaste!");
            break;
        case (usuario === op1 && computador === op2):
            console.log("Perdiste");
            break;
        case (usuario === op2 && computador === op3):
            console.log("Perdiste");
            break;
        case (usuario === op3 && computador === op1):
            console.log("Perdiste");
            break;
        case (usuario === computador):
            console.log("Empate");
            break;
        default:
            console.log("Error, entrada no valida")
    }
}
play(op1, op2);
