let array1 = [1,2,3,4,5,6];
let numero = parseInt(prompt('Indica el numero a buscar'));
for(let i = 0; i < array1.length; i++){
    if(array1[i] != numero){
        continue;
    }else{
        console.log(`El numero fue encontrado en la posicion: ${array1[i]}`);
        break;
    }
}

let n = 10;
//Fragmento 1
let s = 1;
for(let i = 0; i < n; ++i){
    s++;
}

//Fragmento 2
s = 0;
for(let i = 0; i < n; i += 2){
    ++s;
}

function divideAndConquere(array){

    let mitad = Math.floor(array.length/2);
    let arrayParte1 = array.slice(0, mitad);
    let arrayParte2 = array.slice(mitad);

    arrayParte1.sort();
    arrayParte2.sort();

    let arrayFragmentado = [];
    if(array.length < 2){
        return alert('gg');
    }else{
        for(let i = 0; i < array.length; i++){
            let arrayAux = array
        }
    }
    return arrayFragmentado;
}

let array = [5, 2, 4, 7, 1, 3, 2, 6];

divideAndConquere(array);

let mitad = Math.floor(arrayFragmentado.length/2);

let arrayParte1 = arrayFragmentado.slice(0, mitad);
let arrayParte2 = arrayFragmentado.slice(mitad);

arrayParte1.sort();
arrayParte2.sort();


console.log(`Array completo: ${arrayFragmentado}
Primera parte del array: ${arrayParte1}
Segunda parte del array: ${arrayParte2}`);