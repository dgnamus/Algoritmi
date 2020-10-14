//write a function called productOfArray that takes in a array of numbers and returns the product of them all

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    let result = arr.pop();
    return result * productOfArray(arr);      
}
