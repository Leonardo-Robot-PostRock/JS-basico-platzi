function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

auto
var autoNuevo = new Auto("Tesla", "Model 3", 2020);

// autoNuevo
// auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}
var autoNuevo2 = new Auto("Tesla", "Model X", 2018);
var autoNuevo3 = new Auto("Toyota", "Corolla", 2020);

// autoNuevo2
// auto {marca: 'Tesla', modelo: 'Model X', annio: 2018}
// autoNuevo3
// auto {marca: 'Toyota', modelo: 'Corolla', annio: 2020}