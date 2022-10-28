"use strict"

//chiedo all'utente se sceglie pari o dispari
const userEvenOdd = prompt("Pari o dispari?");
console.log(`Hai scelto: ${userEvenOdd}`);

//chiedo all'utente di inserire un numero da 1 a 5
const numberUser =  Number(prompt("scegli un numero da 1 a 5"));
console.log(`Hai scelto il numero: ${numberUser}`);

// genero un numero random che sarà la "scelta" del computer
const numberIA = Math.floor(Math.random()* 5) + 1;
console.log(`L'IA ha scelto il numero: ${numberIA}`);

// assegno a una variabile la somma dei due numeri
let sum = numberUser + numberIA;
console.log(`la somma è: ${sum}`);

//ciclo che verifica chi ha vinto  
if ( sum % 2 === 0 && userEvenOdd === "pari"){ //se la somma è pari e l'user ha scelto pari 
    alert("VITTORIA!");
}else if (sum % 2 !== 0 && userEvenOdd === "dispari"){ //se la somma è dispari e l'user ha scelto dispari
    alert("VITTORIA!");
}else if( sum % 2 === 0 && userEvenOdd === "dispari"){ //se la somma è pari e l'user ha scelto dispari
    alert("SCONFITTA!");
}else{ // se la somma è dispari e l'user ha scelto pari
    alert("SCONFITTA!")
}
