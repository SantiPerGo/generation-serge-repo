// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Export class, encapsulation, setters and getters
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// We don't use this for classes
// const price = Symbol();
// this[price] = carPrice;

export class Car {
    #price;
    #isEngineOn;

    constructor(carName, carBrand, carPrice) {
        this.name = carName;
        this.brand = carBrand;
        this.#price = carPrice;

        // Declarating engine
        this.#isEngineOn = false;
    }

    get price() { return this.#price; }
    set price(newPrice) { this.#price = newPrice; }

    igniteEngine() {
        this.#isEngineOn = !this.#isEngineOn;
        console.log(this.name, this.#isEngineOn ? "Engine is on" : "Engine is off");
    }

    printCarData() {
        console.log(this.getData());
    }
    
    getData() {
        return `Name: ${this.name}\nBrand: ${this.brand}\nCost: ${this.#price}`;
    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Inheritance and polymorphism
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

class ElectricCar extends Car {
    #numberOfBatteries;

    constructor(carName, carBrand, carPrice, carNumberOfBatteries) {
        super(carName, carBrand, carPrice);
        this.#numberOfBatteries = carNumberOfBatteries;
    }

    // Polymorphism changes the original behavior
    getData() {
        return `${super.getData()}\nBatteries: ${this.#numberOfBatteries}`;
    }
    
    getNumberOfBatteries() {
        console.log(`The ${this.name} car has ${this.#numberOfBatteries} batteries`);
    }
}

// Alternative export
export { ElectricCar };