const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}
/**
 * Replica con if else & else if
 */
tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
}

/**
 * Replica sólo con if
 */
tipoDeSuscripcion = "ExpertPlus"
if (tipoDeSuscripcion != "Basic" && tipoDeSuscripcion != "Free" && tipoDeSuscripcion != "Expert" && tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

/**
 * Réplica con array
 */
const suscripcion = "ExpertPlus";

var tipoDeSuscripcion = ["Free", "basic", "Expert", "ExpertPlus"];

for (var i = 0; i < tipoDeSuscripcion.length; i++) {
    if (tipoDeSuscripcion[i]===suscripcion) {
        miSuscripcion = tipoDeSuscripcion[i];
        console.log(`Tienes ${miSuscripcion}, Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año`);
    }
}