let n = prompt('Digita el valor que tendra el array');

let array = new Array(n);

for(let i = 0; i < n; i++){
  array[i] = parseInt(prompt('Digita un valor'));
}

let count = 0;
for(let i = 0; i < n; i++){
  if(array[i] == array[n-1]) count++;
}

console.log(`El ultimno numero tiene un total de ${count} repeticiones`);



//Vector reverso
let reverso = [1, 2, 3, 4, 5, 6, 7];

for(let i = reverso.length; i >= 0; i--){
  console.log(reverso[i]);
}