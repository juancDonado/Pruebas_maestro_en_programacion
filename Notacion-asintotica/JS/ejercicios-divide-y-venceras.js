/* //Suma

let array = [5, 2, 4, 7, 1, 3, 2, 6];

function sumaArray(array, inicio, fin){
  if(inicio == fin){
    return array[inicio];
  }else{
    if(array.length = 1){
      return
    }
    let mitad = (inicio+fin) / 2;
    let parte1;
    let parte2;

    parte1 = sumaArray(inicio, mitad, array);
    parte2 = sumaArray(mitad+1, fin, array);

    return parte1.sort() + parte2.sort();
  }
}


function minimo(inicio, fin, array){
  if(inicio == fin){
    return array[inicio];
  }else{
    let mitad  = (inicio + fin) / 2
    let x = minimo(inicio, mitad, array);
    let y = minimo(mitad + 1, fin, array);

    if(x < y){
      return x;
    }else{
      return y;
    }
  }
}
function minMaximo(inicio, fin, array){
  let minmax = new Array(2);
  if(fin - inicio <= 1){
    minmax[0] = array[inicio];
    minmax[1] = array[fin];
    if(minmax[0] > minmax[1]){
      let aux = minmax[0];
      minmax[0] = minmax[1];
      minmax[1] = aux;
    }
    return minmax;
  }else{
    let mitad  = (inicio + fin) / 2
    let x = minMaximo(inicio, mitad, array);
    let y = minMaximo(mitad + 1, fin, array);

    if(x > y){
      return x;
    }else{
      return y;
    }
  }
}

console.log(minimo(0));

const conteoRegresivo = (a) =>{
  if(a < 0) return
    console.log(a);
    return conteoRegresivo(a-1)
}
conteoRegresivo(10); */

let array = [14, 7, 3, 12, 9, 11, 6, 2];

function ordenarArray(array){
  if(array.length < 1){
    return array;
  }else{
    let mitad = Math.floor(array.length/2);
    let parte1 = array.slice(0, mitad);
    ordenarArray(parte1);
    let parte2 = array.slice(0, mitad);
    ordenarArray(parte2);
  }
  return
}

console.log(ordenarArray(array, 0, array.length -1));