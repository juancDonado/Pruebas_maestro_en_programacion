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
    let max = new Map();
    let min = new Map();
    map.forEach((value, key) => {
        if(key == map.size){
            max.set(key,value);
        }else if(key == 1){
            min.set(key,value);
        }else{
            return map;
        }
    });
    return console.log(max.values(), min.values());
}

//Recorrer un Map
for([key,value] of paises){
    console.log(`La llave es: ${key} y el valor es: ${value}`);
}

//Recorrer en reversa
let reverseMap = Array.from(paises);
reverseMap.slice().reverse().forEach((key, value)=>{
    console.log(`Key ${key} - Value ${value}`);
});

retornoMayor(paises);

let trabajadores = new Map([
    [1 , 652],
    [2, 1200]
]);
console.log(trabajadores);
let i = 2;
trabajadores(2) = trabajadores.set(3 , 500);

console.log(trabajadores);

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

