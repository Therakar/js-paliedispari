"use strict"

//chiedo all'utente se sceglie pari o dispari
const userEvenOdd = prompt("Pari o dispari?") ;

//chiedo all'utente di inserire un numero da 1 a 5
const numberUser =  Number(prompt("scegli un numero da 1 a 5"));

// genero un numero random che sarà la "scelta" del computer
const numberIA = Math.floor(Math.random()* 5) + 1;

