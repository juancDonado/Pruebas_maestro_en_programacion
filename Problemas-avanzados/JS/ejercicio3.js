function arrayDiference(array1, array2){
  let n = array1.length;
  let m = array2.length;
  const aux = [];
  let i = j = k = 0;

  while(i < n && j < m){
    if(array1[i] < array2[j]){
      if(k == 0 || array1[i] != aux[k-1]){
        aux[k] = array1[i];
        k++;
      }
      i++
    }
    else if(array2[j] < array1[i]) j++;
    else i++;
  }
  while(i < n){
    if(k == 0 || aux+[k-1] != array1[i]){
      aux[k] = array1[i];
      k++;
    }
    i++;
  }
  let dif = [];
  for(let i = 0; i < k; i++){
    dif[i] = aux[i];
  } 
  return dif;
}

const array1 = [1, 7, 3];
const array2 = [3, 4, 1];

console.log(arrayDiference(array1, array2));