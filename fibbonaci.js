console.log(fibRefactored(4)) // 3
console.log(fibRefactored(10)) // 55
console.log(fibRefactored(28)) // 317811
console.log(fibRefactored(35)) // 9227465

function fib(num){
    // add whatever parameters you deem necessary - good luck!    
    let fibArr = [1,1];
    function helper(num) {
        if (fibArr[num]) return fibArr[num-1];
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
        return helper(num);  
    }
    return helper(num);    
  }

  // spodaj je refaktorirana verzija, dosti krajša
  function fibRefactored(num) {
      if (num <= 2) return 1;
      return fib(num - 1) + fib(num - 2);
  }