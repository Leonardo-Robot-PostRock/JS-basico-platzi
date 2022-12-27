function miNombreCompleto(nombre, apellido) {
    nombre = prompt("Ingrese nombre: ");
    apellido = prompt("Ingrese apellido: ")
    fullName = nombre + " " + apellido;
    return fullName;
}

miNombreCompleto();

function dineroReal(dineroAhorrado, deudas) {
    dineroAhorrado = prompt("Ingrese cantidad de dinero ahorrado: ")
    deudas = prompt("Ingrese total de la deuda: ");
    saldoTotal = dineroAhorrado - deudas;
    return saldoTotal;
}
dineroReal();