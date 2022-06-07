function welcome(){
  console.log('Bienvenido al juego');
  console.log('Preparate para el juego');
}

function age(){
  let edad = prompt('Introduce tu edad');
  console.log('Tu edad es '+edad);
}

function max(a,b){
  //let res = Math.max(a,b);
  if(a > b){
    return a;
  }else{
    return b;
  }
}

function pasoPorReferencia(a,b){
  let aux = a;
  a = b;
  b = aux;
  console.log(`Ahora A vale (${a}) y B vale (${b})`);
}

function TimerDescompose(n){
  let h = Math.floor(n / 3600);
  let m = Math.floor((n % 3600) / 60);
  let s = Math.floor((n % 3600) % 60);
  console.log(`El total en horas es: ${h} horas con ${m} minutos y ${s} segundos`);
}

welcome();
age();
console.log(max(23.1,23.3));
pasoPorReferencia(5,2);
TimerDescompose(6670);