/////////////// PRACTICA ///////////////
//// Calculadora de Edad con moment
//// Link: https://momentjs.com/

//1) Instalo moment = npm install moment

//2) Importo la dependencia:
const moment = require("moment");

//Variable para contener la fecha actual:
const today = moment();

//Variable con mi fecha de nacimiento:
const myBirthdate = moment("1994-04-30");

//Valido que mi fecha de nacimiento sea valida:
if(myBirthdate.isValid()) {
    const daysDifference = today.diff(myBirthdate, "days");
    console.log(`La cantidad de total de dias que pasaron desde que naci es de: ${daysDifference}`);
} else {
    console.error("La fecha ingresada es erronea")
}