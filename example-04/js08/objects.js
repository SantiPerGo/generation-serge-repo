// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Objects
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Creating object
const fruitsColors = {
    strawberry: ["red"],
    cucumber: ["green"],
    mango: ["yellow"],
    orange: ["orange"],
    tangerine: ["orange"],
    blackberries: ["purple"],
    pitaya: ["pink", "red", "white", "yellow"]
};

// Reading object
console.log("The cucumber is ", fruitsColors.cucumber);
console.log("The pitaya is ", fruitsColors.pitaya[1]);
console.log("The pitaya is ", fruitsColors.pitaya.join("-"));

// Modify object
fruitsColors.mango.push("green");
console.log("The mango is ", fruitsColors.mango);

fruitsColors.mango = "green";
console.log("The mango is ", fruitsColors["mango"]);

// Iterate object
for (let key in fruitsColors)
    console.log(fruitsColors[key]);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Symbol
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Hiding object value, it's accesible only with the symbol variable
const salaryHidden = Symbol()
const employee = {
    name: "Santi",
    lastname: "PerGo",
    [salaryHidden]: 50_000
};

for(let keys in employee)
    console.log(employee[keys]);

//localStorage.setItem("employee-data", JSON.stringify(employee));
//sessionStorage.setItem("employee-data", JSON.stringify(employee));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Object methods
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const chocolateJar = {
    weight: 20,
    taste: "chocolate",
    colors: ["red", "brown", "yellow", "blue"],
    cost: 35,
    quantity: 100,
    isOpen: false,

    openJar: function() {
        this.isOpen = true;
        console.log("Chocolate jar opened");
    },

    closeJar: function() {
        this.isOpen = false;
        console.log("Chocolate jar closed");
    },

    eatChocolate: function() {
        if(this.isOpen) {
            this.quantity--;
            console.log(`Now you have ${this.quantity} chocolates`);
        } else {
            console.log("You must open the chocolate jar");
        }
    }
}

chocolateJar.openJar();
chocolateJar.eatChocolate();
chocolateJar.closeJar();