var arr = [2,2,4,5,6,7,8,3,9,10];

var max = arr[0];

for (let i = 1;i<arr.length; i++){
    if (arr[i]>max){
        max = arr[i];
    }
}
console.log(max);