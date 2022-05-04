const string1 = prompt("inserisci la prima parola ");
const string2 = prompt("inserisci la seconda parola ");

if(string1.length > string2.length){
    console.log(string1);
    console.log("la prima parola è piu lunga della seconda");
} else if(string1.length < string2.length){
    console.log(string2);
    console.log("la seconda parola è piu lunga della seconda");
} else {
    console.log("le parole hanno la stessa lunghezza");
}