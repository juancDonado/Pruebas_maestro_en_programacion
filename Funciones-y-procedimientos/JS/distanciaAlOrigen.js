function distanciaAlOrigen(x, y){
  let d = Math.sqrt(x*x+y*y);
  return d;
}

let a = prompt('Posicion en X');
let b = prompt('Posicion en Y');
let res = distanciaAlOrigen(a,b);
console.log(res);


function engrosar(n){
  if(n < 10){
    return n;
  }
}