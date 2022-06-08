function distanciaAlOrigen(x, y){
  let d = Math.sqrt(x*x+y*y);
  return d;
}

let a = prompt('Posicion en X');
let b = prompt('Posicion en Y');
let res = distanciaAlOrigen(a,b);
console.log(res);


//Engrosar

function maximo(a, b){
  if(a >= b) return a;
  else return b;
}
 
function fatten(x){
  if(x < 10){
    return x;
  }else{
    let n = x % 10;
    let fn = fatten(x/10) % 10;
    let valor = maximo(n, fn);
    return 10 * fatten(x/10) + valor;
  }
}

while (a = prompt('Digita un valor')){
  console.log(fatten(a));
}

/* 
const array = new Array(a)(b); */