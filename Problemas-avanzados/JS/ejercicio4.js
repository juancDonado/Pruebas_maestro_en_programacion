function timeLapse(time1, time2){
  if(time1 < time2) return time2 - time1;
  else return 60 - (time1 - time2);
}

let a = parseInt(prompt('Digita el primer tiempo'));
let b = parseInt(prompt('Digita el segundo tiempo'));
let lapso = timeLapse(a,b);
let c = parseInt(prompt('Digita otro tiempo'));
let cierto = true;

while(c != -1 && cierto){
  if(isNaN(c)){
    console.log('No es un numero');
    break;
  }else{
    let nuevoLapso  = timeLapse(b,c);
    cierto = lapso == nuevoLapso;
    b = c;
    c = parseInt(prompt('Digita otro tiempo'));
  }
}
if(cierto) console.log(lapso);
else console.log(0);


