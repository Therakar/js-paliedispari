"use strict"

//chiedo all'utente se sceglie pari o dispari
const userEvenOdd = prompt("Pari o dispari?").toLowerCase;

//chiedo all'utente di inserire un numero da 1 a 5
const numberUser =  Number(prompt("scegli un numero da 1 a 5"));

// genero un numero random che sarà la "scelta" del computer
const numberIA = Math.floor(Math.random()* 5) + 1;

// assegno a una variabile la somma dei due numeri
let sum = numberUser + numberIA;

