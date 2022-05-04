//dato un array vuoto, chiedi all'utente 6 numeri se dispari inseriscilo nell'array
let x = 0;
const array = [x];

for(let i=0; i<6 ; i++){
    let n = Number(prompt("inserire un numero"));
    if(n % 2 === 1){
        array[x] = n ;
        x++;
    }
}
console.log(array.length);
// stampa array

for (let i=0;i < x ; i++){
    console.log(array[i]);
}

