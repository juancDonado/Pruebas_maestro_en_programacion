let array = [1,2];

function obtenerMaximo(array,init,end){
    if(init+1 >= end){
        return Math.max(array[init], array[end])
    }else{
        let half = Math.floor(array.length/2);
        if(array[half] < array[half+1]){
            return obtenerMaximo(array, half+1, end);
        }
        if(array[half-1] > array[half]){
            return obtenerMaximo(array, init, half-1);
        }else{
            return array[half];
        }
    }
}

obtenerMaximo(array, 0, array.length);