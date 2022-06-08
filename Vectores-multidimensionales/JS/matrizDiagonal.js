function cuadratica(array){
  let n = array.length;
  for(let i = 0; i < n; i++){
    for(let j  =0; j < n; j++){
      if(i != j && array[i][j] != 0){
        return false;
      }
    }
  }
  return true;
}

let n = parseInt(prompt('Digita el numero de tu matriz cuadratica'));
const array = new Array();

for(let i = 0; i < n; i++){
  array[i] = new Array();
  for(let j  =0; j < n; j++){
    array[i][j] = parseInt(prompt(`Digita el valor para la fila (${i}) y la columna (${j})`));
  }
}

if(cuadratica(array)) console.log('Es cuadratica');
else console.log('No es cuadratica');