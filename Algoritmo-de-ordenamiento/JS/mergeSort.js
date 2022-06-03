/* function merge(array, left, mid, rigth){

  let aux = [];
  let i = left;
  let j = mid+1;
  let k = 0;

  while(i <= mid && j <= rigth){
    if(array[i] <= array[j]){
      aux[k] = array[i];
      ++i;
      console.log('- '+array);
    }else{
      aux[k] = array[j];
      ++j;
      console.log('-- '+array);
    }
    ++k;
  }
  while(i <= mid){
    aux[k] = array[i];
    ++k;
    ++i;
    console.log('--- '+array);
  }
  while(j <= mid){
    aux[k] = array[j];
    ++k;
    ++j;
    console.log('---- '+array);
  }

  for(k = 0; k < array.left; ++k){
    array[left + k] = aux[k];
    console.log('------ '+array);
  }
}

function mergeSort(array, left, rigth){
  if(left < rigth){
    let mid = Math.floor((left + rigth)/2);
    mergeSort(array,left,mid);
    mergeSort(array,mid+1,rigth);
    merge(array, left, mid, rigth);
  }
  return array;
}

let array = [5, 1, 25, 11];

console.log(mergeSort(array, 0, array.length));
 */

/* 
function merge(array, left, half, right){
  let i = left;
  let j = half+1;
  let k = 0;
  let aux = [];

  while(i <= half && j <= right){
    if(array[i] < array[j]){
      aux[k] = array[i];
      i++;
      k++;
    }else{
      aux[k] = array[j];
      j++;
      k++;
    }
  }
  if(i > half){
    for(let x = half + 1; x < i; x++){
      aux[k] = array[x];
      i++;
    }
  }
  if(j > right){
    for(let x = right + 1; x < j; x++){
      aux[k] = array[x];
      j++;
    }
  }
}

function mergeSort(array, left, right){
  if(left < right){
    //let half = Math.floor(array.left/2);
    let half = Math.floor((left + right)/2);
    mergeSort(array, left, half);
    mergeSort(array, half+1, right);
    merge(array, left, half, right);
  }
  return array;
}

let array = [5, 1, 25, 11];

console.log(mergeSort(array, 0, array.length)); */


function mergeSort(array){
  if(array.length < 2){
    return array;
  }
  const half = Math.floor((array.length/2));
  const first = array.slice(0, half);
  const second = array.slice(half);
  return merge(mergeSort(first), mergeSort(second));
}

const merge = (first, second)=>{
  const result = [];
  let i = j = 0;
  while(i < first.length && j< second.length){
    result.push(first[i] < second[j] ? first[i++] : second[j++]);
  }
  console.log(...result, ...first.slice(i), ...second.slice(j));
  return [...result, ...first.slice(i), ...second.slice(j)];
}



const array = [5, 1, 25, 11];

console.log(mergeSort(array));


/* https://youtu.be/Lk5Ql4_VeUs */