//fai la somma di tutti gli elementi  che sono in posizione dispari

let array = [1,2,3,4,5,6,7,8,9];

let sum = 0;

for(let i=0 ; i < array.length ; i++ ){
    if (i % 2 === 1){
        console.log(i)
        sum += array[i];
    }
}
console.log(sum);