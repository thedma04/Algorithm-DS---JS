// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// First solution
// function anagrams(stringA, stringB) {
//     aCharMap = charMap(stringA);
//     bCharMap = charMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){ // Checking for length
//         return false
//     }

//     for(let cha in aCharMap){
//         if(aCharMap[cha] !== bCharMap[cha]){
//             return false
//         }
//     }
//     return true
// }

// function charMap(str){
//     const chars = {}
//     for(let cha of str.replace(/[^\w]/g, "").toLowerCase()){
//         chars[cha] = chars[cha]++ || 1
//     }

//     return chars
// }


// Second solution

function anagrams(stringA, stringB){
    return cleanStrings(stringA) === cleanStrings(stringB)
}

function cleanStrings(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}
module.exports = anagrams;
