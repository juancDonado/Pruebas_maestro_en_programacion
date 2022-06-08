function sumaDeDigitos(z){
  if(z < 10) return z;
  else{
    return Math.floor((z % 10) + sumaDeDigitos(z / 10));
  }
}

function siguiente(a){
  return (a + sumaDeDigitos(a));
}

function encuentroDeRio(n){
  let r1 = 1;
  let r3 = 3;
  let r9 = 9;

  while(n != r1 && n != r3 && n != r9){
    if(n > r1) r1 = (siguiente(r1));
    else if(n > r3) r3 = (siguiente(r3));
    else if(n > r9) r9 = (siguiente(r9));
    else n = (siguiente(n));
  }
  return n;
}

let n;
while(n = parseInt(prompt('Digita un numero'))){
  console.log(encuentroDeRio(n));
}