let filas = parseInt(prompt('Digita el numero de filas'));
let col = parseInt(prompt('Digita el numero de columnas'));
const array = new Array();

for(let i = 0; i < filas; i++){
  array[i] = new Array();
  for(let j  =0; j < col; j++){
    array[i][j] = parseInt(prompt(`Digita el valor para la fila (${i}) y la columna (${j})`));
  }
}
console.log('-----------');
console.log(array[[i],[j]]);
