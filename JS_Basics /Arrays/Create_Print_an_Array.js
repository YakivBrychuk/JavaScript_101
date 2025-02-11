// promt-sync module is used to take input from the user
const prompt = require('prompt-sync')();

console.log("Create and Print an Array");
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

arr.forEach(element => { console.log(element)});