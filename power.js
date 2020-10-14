//write a function that accepts a base and an exponent, the function should return the power of the base to the exponent.

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16

function power(base, exponent){
    if (exponent === 0) return 1;
    exponent--;
    return base * power(base, exponent);
}

