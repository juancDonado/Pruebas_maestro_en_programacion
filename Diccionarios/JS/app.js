let paises = new Map();
paises.set(3 , 'Panama');
paises.set(2 , 'Egipto');
paises.set(1 , 'Argentina');
paises.set(7 , 'Colombia');
paises.set(5 , 'Peru');
paises.set(6 , 'Chile');
paises.set(4 , 'Mexico');
paises.set(8 , 'London');

//Buscar el mayor y el menor
function retornoMayor(map){
    let max;
    let min;
    map.forEach((value, key) => {
        if(key == map.size){
            max = key;
        }else if(key == 1){
            min = key;
        }else{
            return map;
        }
    });
    return console.log(`El ID maxmo es el ${max} y el minimo es ${min}`);
}
retornoMayor(paises);


//Recorrer un Map
console.log('------------------');
for([key,value] of paises){
    console.log(`La llave es: ${key} y el valor es: ${value}`);
}
console.log('------------------');


//Recorrer en reversa
let reverseMap = Array.from(paises);
let m = new Map(reverseMap.reverse());
console.log('------------------');
console.log(m);
console.log('------------------');


//Ordenar un map
let trabajadores = new Map([
    ['Josepo' , 652],
    ['Andres', 1200],
    [5 , 1200],
    [1 , 1200],
    ['g' , 1200]
]);

let arrayDePaso = Array.from(trabajadores);
//Ordenar en reversa
let x = new Map(arrayDePaso.sort()/*arrayDePaso.sort().reverse()*/);
console.log('------------------');
console.log(x);
console.log('------------------');


//Añadir elementos de un map a otro
let y = new Map([
    ['Josepo' , '652'],
    ['Andres', '1200'],
    [5 , '1200'],
    [1 , '1200'],
    ['g' , '1200']
]);
let z = new Map([
    ['Luis' , '652'],
    ['Rosa', '1200']
]);

//Añadir los datos de z a y
for([key, value] of z){
    y.set(key, value);
}
console.log('------------------');
console.log(y);
console.log('------------------');
console.log(z);
console.log('------------------');






/* y.forEach((key, index, y)=>{
    if(index == i){
        console.log('------------------');
        console.log(`Indice: ${index}. Buscador: ${i}: key(${key}) - Valor(${y})`);
        console.log('------------------');
    }
}); */



//Reverse for
/* reverseMap.slice().reverse().forEach((key, value)=>{
    console.log(`Key ${key} - Value ${value}`);
    m.set(key, value);
});
for([key,value] of m){
    console.log(`--- La llave es: ${key} y el valor es: ${value}`);
} */

//Insertar por for
/* let mapDePaso = new Map();
arrayDePaso.forEach(([key, value])=>{
    mapDePaso.ste(key, value);
});
console.log(mapDePaso); */

// Insertar un nuevo valor a un key con iterador especifico

/* function pedir(){
    let newMap = new Map();
    let nota = prompt('Ingresa la nota, 0 para terminar de añadir');
    while(nota != 0){
        let i = 1;
        newMap.set(i, nota);
    }
}
pedir(); */

/* let newMap = Object.fromEntries(paises);
console.log(newMap);
let longitud = Object.keys(newMap).length;
 */
/* paises.set(1, 'Juan Donado');
paises.set(2, 'Maria');
paises.set(3, 'Alexander');
paises.set(4, 'Sneider');
paises.set(5, 'Brando');
 */
/* 
Iterar en base a una funcion
function logSetElements(value1, value2) {
    console.log('[' + value1 + '] = ' + value2);
}
console.log(paises.forEach(logSetElements));
*/
/* 
//forEach
paises.forEach((key, value)=>{
    console.log(`Key ${key} - Value ${value}`);
});

//For of
for([key,value] of paises){
    console.log(key,value);
}
 */
//Ordenamiento
/* for([key,value] of paises){
    if(key > key+1){
        let aux = key+1;
        key = paises[i+1];
        key = aux;
    }
}
let mapFixed = new Array([...paises].sort());
 */

