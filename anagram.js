function anagram(word1, word2) {
    //najprej lahko preverim, če sta dolžini besed enaki 
    if(word1.length !== word2.length) {
        return false;
    }
    //potem bom ustvaril dva objekta 
    obj1 = {};
    obj2 = {};    
    //potem bom dodal znake v objekta
    for (let char of word1) {
        obj1[char] = (obj1[char] || 0) + 1
    }
    for (let char of word2) {
        obj2[char] = (obj2[char] || 0) + 1
    }
    //potem bom primerjal če oba objekta vsebujeta isti znak    
    //potem bom preveril če imata oba znaka isto vrednost 
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(anagram("anagram", "gramana"));