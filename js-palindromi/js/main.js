"use strict"

function isPal (userWord){
// let che conterrà la parola con l'ordine delle lettere invertito
let controlWord = "";

// ciclo for tramite il quale invertirò l'ordine delle lettere
for (let i = userWord.length - 1; i >= 0 ; i--){

    // attribuisco alla let ""controlWord" la parola con le lettere invertite come valore 
   controlWord += userWord[i];
}

// se la parola inserita dall'utente rimane identica a quella contenuta in "controlWord" è un palindromo 
if (userWord === controlWord){
    return true;
} else { 
    return false;
}
}

console.log(isPal(""));


