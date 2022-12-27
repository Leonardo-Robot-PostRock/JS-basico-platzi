var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length>0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
// Aquí el elemento shift saca un elemento array por cada iteración, de manera que por cada ciclo se manda a llamar un nombre diferente del array.
    // (4) ['Maria', 'Sergio', 'Rosa', 'Daniel']
    // VM2625:4 Hola, Maria
    // VM2625:8 (3) ['Sergio', 'Rosa', 'Daniel']
    // VM2625:4 Hola, Sergio
    // VM2625:8 (2) ['Rosa', 'Daniel']
    // VM2625:4 Hola, Rosa
    // VM2625:8 ['Daniel']
    // VM2625:4 Hola, Daniel
    // undefined