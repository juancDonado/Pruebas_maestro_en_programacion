const binarySearch = (array, item)=>{
    function recurse(min, max){
        let half = Math.floor(array.length / 2);
        console.log(half);
        if(array[half] === item){
            return array[half];
        }
        if(array[half] > item){
            return recurse(min, half-1)
        }
        return recurse(half+1,max);
    }
    return recurse(0, array.length);
}

let array = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(array,5));