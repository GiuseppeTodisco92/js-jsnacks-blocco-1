//Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const firstName = ["giuseppe","michele","donato"];
const surname = ["todisco","amoruso","murolo"];


let randomFirstName= Math.floor(Math.random()*firstName.length);
let randomSurname= Math.floor(Math.random()*firstName.length);
console.log(firstName[randomFirstName],surname[randomSurname]);