let array = new Array(5);

/* for(let i = 0; i < array.length; i++){
  array[i] = prompt((i+1)+'. Digita el dato');
} */
//Mostrar el array
array.forEach(element => {
  console.log(element);
});

//Numero minimo
let minimo = new Array(5);

for(let i = 0; i < minimo.length; i++){
  minimo[i] = parseInt(prompt((i+1)+'. Digita el dato'));
}
let min = minimo[0];

for(let i = 1; i < minimo.length; i++){
  if(minimo[i] < min){
    min = minimo[i];
  }
}
console.log(`El valor minimo es ${min}`);


