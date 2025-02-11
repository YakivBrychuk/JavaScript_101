// promt-sync module is used to take input from the user
const prompt = require('prompt-sync')();

console.log("Create and Print an Array");
let n = prompt("Enter the number of elements in the array: ");
console.log(`You have entered: ${n}`);
let arr = [];
for (let i =0; i<n; i++){
    arr[i] = prompt("Enter the element: ");

}
arr.forEach((element => { console.log(element)}));