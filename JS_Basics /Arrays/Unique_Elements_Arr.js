var arr = [2,2,4,5,6,7,8,9,10];

var new_arr = [];

for (let i=0;i < arr.length;i++) {
    if (!new_arr.includes(arr[i])) {
            new_arr.push(arr[i]);
}
}

console.log(new_arr); 