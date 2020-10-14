//accepts a number and returns the sum of all the numbers from 0 to that number

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6))// 21
console.log(recursiveRange(10)) // 55 

function recursiveRange(num){
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);       
}