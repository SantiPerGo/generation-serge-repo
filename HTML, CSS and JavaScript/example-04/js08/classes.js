// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Classes for object creation
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Class creation
class Car {
    constructor(carName, carBrand) {
        this.name = carName;
        this.brand = carBrand;
        this.isEngineOn = false;
        console.log("Car created", carName);
    }

    igniteEngine() {
        this.isEngineOn = !this.isEngineOn;
        console.log(this.name, this.isEngineOn ? "Engine is on" : "Engine is off");
    };
    
    getCarData = () => console.log(`Name: ${this.name}\nBrand: ${this.brand}`);
}

// Object creation by instantiating class
const aveo = new Car("Aveo", "Chevrolet");
const elantra = new Car("Elantra", "Hyundai");

// Using methods
console.log(aveo);
aveo.igniteEngine();
aveo.getCarData();