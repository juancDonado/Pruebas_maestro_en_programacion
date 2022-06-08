function timeLapse(time1, time2){
  if(time1 < time2) return time2 - time1;
  else return 60 - (time1 - time2);
}

let a,b;

