var arr = [2,2,4,5,6,7,8,9,10];

// sum of the elements of the array
function simpleArraySum(arr) {
    // Write your code here
    let sum = 0;
    let summ = (item) => sum+=item;
    ar.forEach(summ)
    
    return sum;
}

// Sum of the elements of the array with anonymous function and forEach method
let sum = 0;
arr.forEach(element => {sum += element});

console.log(sum);

let average = sum/arr.length;

console.log(Number(average.toFixed(2)));
