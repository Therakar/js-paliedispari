"use strict"

function isPal (userWord){
// let che conterrà la parola con l'ordine delle lettere invertito
let controlWord = "";

// ciclo for tramite il quale invertirò l'ordine delle lettere
for (let i = userWord.length - 1; i >= 0 ; i--){

    // attribuisco alla let ""controlWord" la parola con le lettere invertite come valore 
   controlWord += userWord[i];
}

// se la parola inserita dall'utente rimane identica a quella contenuta in "controlWord" restituisce true ...
if (userWord === controlWord){
    return true;
} else { //... altrimenti restituisce false 
    return false;
}
}

// console.log(isPal(""));

// richiesta dell'input dell'utente
const userWord = prompt ("Inserisci la tua parola per vedere se è un palindromo:");

// ciclo
if (isPal(userWord) === true){
    alert ("PALINDROMO");
} else{
    alert ("NON PALINDROMO");
}
