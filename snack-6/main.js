//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let num = Number(prompt("inserisci un numero"));

if (num % 2 === 0){
    console.log(num);
} else {
    num ++;
    console.log(num);
}