//torej, vsak alfanumerični znak iz stringa mora dodat v objekt in napisati kolikokrat se ponovi

function charCount(str) {
    countObject = {};
    //zdaj najbolje da grem čez vsak znak posebej in določim a je alfanumerični znak?
    for (let char of str) {
        char = char.toLowerCase();        
        if (/[a-z0-9]/.test(char)) {            
            countObject[char] = ++countObject[char] || 1;            
        }
    }
    return countObject;
}

console.log(charCount("Hello hi benjamin Franklin 1776"));
