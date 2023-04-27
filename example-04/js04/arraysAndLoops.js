// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Arrays
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Types of arrays declaration
const names = ["Sofi", "Alejandro", "Ixchel", "Said"];
const lastnames = new Array("Montellano", "Torres", "Vazquez");
const cohorts = new Array(4); // Empty array with 4 spaces

// Getting one element
console.log("Sergio lastname:", lastnames[1]);

// Adding one element to the array
lastnames.push("Ruiz");

// Printing arrays
console.log(names);
console.log(lastnames);
console.log(cohorts);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Bidimensional or anidated arrays
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 // [ [] , [] , []  ]

const personasEnCohorte = [ 
/*ch26*/    ["Arath"  , "José"   , "Karen"     , "Sofi"          ], 
/*ch27*/    ["Manuel" , "María"  , "Francisco" , "Pablo", "Pepe" ], 
/*ch28*/    ["Doris"  , "Brendan", "Lucas", "Maria"              ] 
]; 

console.log("Personas ch27: " + personasEnCohorte[1].join(", ") );

//Accediento a Francisco
// ["Manuel" , "María"  , "Francisco" , "Pablo", "Pepe" ]
//const temporalCh27 = ["Manuel" , "María"  , "Francisco" , "Pablo", "Pepe" ];
const temporalCh27 = personasEnCohorte[1];
const paco = temporalCh27[2];
console.log("Extraer en pasos " + paco ); // Francisco
console.log("Paco en Ch27 " + personasEnCohorte[1][2] ); // Francisco
console.log("Lucas de Ch28 " + personasEnCohorte[2][2] ); // Lucas
console.log("Karen de Ch26 " + personasEnCohorte[0][2] ); // Karen

personasEnCohorte[1][3] = "Juán";
console.log("Personas ch27: " + personasEnCohorte[1].join(", ") );

// myArray3D = [ [ [],[],[]  ], [ [],[],[] ] ];  myArray3D[][][];

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// For each
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Iterar todos los elementos en un arreglo de 2 dimensiones.
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`)
    for (let columna = 0; columna <  personasEnCohorte[fila].length; columna++)
        console.log(`Nombre: ${personasEnCohorte[fila][columna] }`)
}

// Usando forEach y arrow function
personasEnCohorte.forEach( fila => fila.forEach( columna =>  console.log(columna) ));

// Usando forEach
for(let row of personasEnCohorte)
    for(let column of row)
        console.log(column);

/*
    Is not necessary to indicate the start, comparation and final expresson

    for(start; comparation; final expression) { statements }
    for( ; ; ) { statements }
*/
let iteration = 0;
for(;;) {
    console.log(iteration);
    if(iteration == 5)
        break;
    iteration++;
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Exercise
// Iterate and show personasEnCohorte, but stop when Maria is found
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Using label to break the principal loop
loop: for(let row of personasEnCohorte)
    for(let column of row) {
        console.log(column);
        if(column === "María")
            break loop;
    }

// Using continue to avoid the Maria element
for(let row of personasEnCohorte)
    for(let column of row)
        if(column == "María" || column === "Maria")
            continue;
        else
            console.log(column);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// While
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let counter = 0;
while(counter < 10)
    console.log(`You has continued ${++counter} ${counter > 1 ? "times" : "time"}`);

const numbers = [9, 5, 6, 7];
let iterator = 0;
while (iterator < numbers.length) {
    console.log(numbers[iterator]);
    iterator++;
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Practice with binary search
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx