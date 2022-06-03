function insertionSort(array){
  for(let i = 1; i < array.length; ++i){
    let init =  array[i];
    let j = i;
    while(j > 0 && array[j-1] > init){
      array[j] = array[j-1];
      console.log('-'+array)
      --j;
    }
    array[j] = init;
    console.log('--'+array);
  }
  return array;
}

let array = new Array(5);

for(let i = 0; i < array.length; i++){
  array[i] = parseInt(prompt('Digite  un numero'));
  if(isNaN(array[i])){
    alert('Valor no aceptado solo se aceptan numeros enteros');
    i--;
  }
}

console.log(insertionSort(array));