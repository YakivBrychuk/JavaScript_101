var arr = [2,2,4,5,6,7,8,9,10];

// Sum of the elements of the array
let sum = 0;
arr.forEach(element => {sum += element});

console.log(sum);

let average = sum/arr.length;

console.log(Number(average.toFixed(2)));
