/*
 * Create the function factorial here
 */
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n ; i++ ) {
       result = result * i;
    }
    return result;
    
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}