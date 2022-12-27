var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",    
    annio: 2020
};
// Para mandar a llamar una palabra clave de mi objeto, es:
// miAuto.marca
// 'Toyota'
// miAuto.annio
// 2020
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",    
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);    
    }
};
miAuto.detalleDelAuto();
// Auto Corolla 2020