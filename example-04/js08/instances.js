// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Import class
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Importing car class
import { Car, ElectricCar } from "./car.js";

// Object creation by instantiating class
const aveo = new Car("Aveo", "Chevrolet", 50_000);

// Using methods
console.log(aveo);
aveo.igniteEngine();
aveo.printCarData();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Encapsulation, setters and getters
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// This print undefined because is a private property with no getter method
console.log("Aveo engine state:", aveo.isEngineOn);

// This is possible because we have the setter and getter methods
console.log("Old aveo price:", aveo.price);
aveo.price = 100_000;
console.log("New aveo price:", aveo.price);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Inheritance
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const electricElantra = new ElectricCar("Elantra Electric", "Hyundai", 80_000, 5);
electricElantra.printCarData();
electricElantra.getNumberOfBatteries();