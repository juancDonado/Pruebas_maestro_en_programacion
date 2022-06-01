const countDown = (n)=>{
    let numbers = [];
    while(n){
        numbers.push(n--);
    }
    return numbers;
}
console.log(countDown(1));
console.log(countDown(5));

const countDownRecursive = (n)=>{
    if(!n){
        return [];
    }
    return [n].concat(countDownRecursive(n-1));
}

console.log(countDownRecursive(1));
console.log(countDownRecursive(5));


const countDownAcumulador = (n)=>{
    let res = arguments[1] || [];
    if(!n){
        return res;
    }

    res.push(n);
    countDownAcumulador(n-1, res);
    return res;
}
console.log(countDownAcumulador(1));
console.log(countDownAcumulador(5));