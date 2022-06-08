function position(x, array, left, rigth){
  if(left > rigth) return -1;
  let half = Math.floor((left + rigth)/2);
  if(x > array[half]) return position(x, array, half+1, rigth);
  if(x < array[half]) return position(x, array, left, half-1);
  return half;
}

let n = parseInt(prompt('Digita el tamaño del array'));
const array = new Array(n);

for(let i = 0; i < n; i++){
  array[i] = parseFloat(prompt('Digita un valor'));
}

let x = 2.5;

console.log(`El elemento ${x} se encuentra en la posicion ${position(x, array, 0, n-1)}`);
