const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = parseInt(arr.length / 2) | 0;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const merge = (left, right) => {
    const result = [];
    let il = ir = 0;

    while (il < left.length && ir < right.length) {
      result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
    }

    return [...result, ...left.slice(il), ...right.slice(ir)];
  }

  return merge(mergeSort(left), mergeSort(right));
}

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = mergeSort(arr);

const x1 = [1,2,3,4];
const x2 = [...x1];
console.log(x1, x2);
console.log(result);