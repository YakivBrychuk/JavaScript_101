// promt-sync module is used to take input from the user
const prompt = require('prompt-sync')();

// Taking the number of elements in the array as input from the user as Integer
let n = Number(prompt("Enter the number of elements in the array: "));
console.log(`You have entered: ${n}`);

function createArray(n){
    // Creating an empty array
    let arr = [];
    //
    for (let i =0; i<n; i++){
        arr[i] = Number(prompt("Enter the element: "));

    }
    return arr;
}
var arr = createArray(n);

arr.sort((a,b) => a-b);

console.log(arr[arr.length-2]);

console.log("What if we have duplicate elements in the array?");

function getSecondLargest(arr) {
    let n = arr.length; 
    let unq = [];
    for(let i =0;i < n; i++){
     if(!unq.includes(arr[i])){
         unq.push(arr[i]);
     }
    }
    let nq = unq.length;
    unq.sort((a,b)=> a - b);
    return unq[nq-2];
}

console.log(getSecondLargest(arr));