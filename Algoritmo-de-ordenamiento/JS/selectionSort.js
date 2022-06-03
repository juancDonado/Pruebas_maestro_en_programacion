function selectionSortFor(array){
  for(let i = 0; i < array.length - 1; i++){
    let minIndex = i;
    for(let j = i; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
let array = [5 , 3, 9, 7, 4, 8, 6, 1];
console.log(selectionSortFor(array));

// Recursividad
function postMin(array, left, right){
  let pos = left;
  for(let i = pos + 1; i <= right; i++){
    if(array[i] < array[pos]) pos = i;
  }
  return pos;
}

function selectioSort(array){
  let last = Math.floor(array.length -1);
  for(let i = 0; i < last; i++){
    let k = postMin(array, i, last);
    [array[k], array[i]]=[array[i], array[k]];
  }
  return array
}

let selectArray = [5 , 3, 9, 7, 4, 8, 6, 1];
console.log(selectioSort(selectArray));
