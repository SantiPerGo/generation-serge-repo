// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Anidated block scope
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

{
    let name = "Santiago", santiAge = 23, alvaroAge = 25;
    
    let santiCohorte = alvaroCohorte = 26;
    // The previous line is equal to:
    // var alvaroCohorte = 26;
    // let santiCohorte = alvaroCohorte

    {
        let name = "Alvaro";
        console.log(`My name is ${name}`);
        console.log(`Alvaro age is ${alvaroAge}`);
        console.log(`Santiago age is ${santiAge}`);
        console.log(`Alvaro cohorte is ${alvaroCohorte}`);
        console.log(`Santiago cohorte is ${santiCohorte}`);
    }

    console.log(`My name is ${name}`);
    console.log(`Alvaro age is ${alvaroAge}`);
    console.log(`Santiago age is ${santiAge}`);
    console.log(`Alvaro cohorte is ${alvaroCohorte}`);
    console.log(`Santiago cohorte is ${santiCohorte}`);
}

/* Here is error because variables are not declared
console.log(`Alvaro age is ${alvaroAge}`);
console.log(`Santiago age is ${santiAge}`);
console.log(`Santiago cohorte is ${santiCohorte}`);
*/
console.log(`Alvaro cohorte is ${alvaroCohorte}`);