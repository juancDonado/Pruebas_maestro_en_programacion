function factorial(n){
  if(n == 0){
    return 1;
  }
  let fact = 1;
  for(let i = 1; i <= n; ++i){
    fact *= i
  }
  return fact
}
let num = prompt('Digita el numero');
console.log(factorial(num));


function factorialRecursivo(n){
  if(n == 0) return 1;
  else{
    return n * factorialRecursivo(n-1);
  }
}
let numRe = prompt('Digita el numero')
console.log(factorialRecursivo(5));
