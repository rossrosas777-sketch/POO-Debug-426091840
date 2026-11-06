class Electrodomestico {
    constructor(marca) {
        this.marca = marca;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
    }
}

class Cafetera extends Electrodomestico {
    constructor(marca, tipoCafe) {
        super(marca);
        this.tipoCafe = tipoCafe;
    }

    prepararCafe() {
        if (this.encendido === false) {
            console.log("Primero enciende la cafetera");
            return;
        }

        console.log("Sirviendo café:", this.tipoCafe);
    }
}

const miCafetera = new Cafetera("Nespresso", "Espresso");

miCafetera.encender();
miCafetera.prepararCafe();
