let array = [1,2,3,4,4,5,6,4,3,3,2,1];
//let array = [1,2,4,4,5,6,4,3,2];

function obtenerMaximo(array,init,end){
    if(init + 1 >= end){
        return Math.max(array[init], array[end])
    }else{
        let half = Math.floor(init+end/2);
        if(array[half] < array[half+1]){
            return obtenerMaximo(array, half+1, end);
        }else if(array[half-1] > array[half]){
            return obtenerMaximo(array, init, half-1);
        }else{
            return array[half];
        }
    }
}

let maximo = array.length;
console.log(obtenerMaximo(array, 0, maximo));