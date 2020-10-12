function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    //se pravi rabim dva pointerja 
    let unique = 0;
    let scout = 1;    
    while (scout < arr.length) {
        if (arr[unique] === arr[scout]) {
            scout++;
        } else {
            unique++;
            arr[unique] = arr[scout];
        }
    }
    return unique + 1;
}

console.log(countUniqueValues([1,2,2,2,3,3,4,88]));

function countUniqueValuesRefactored(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let unique = 0;
    for (let scout = 1; scout < arr.length; scout++) {
        if (arr[unique] !== arr[scout]) {
            unique++;
            arr[unique] = arr[scout];
        }
    }
    return unique + 1;
}

console.log(countUniqueValuesRefactored([1,2,2,2,3,3,4,88]));