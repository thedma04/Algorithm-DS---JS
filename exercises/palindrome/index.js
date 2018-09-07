// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const newStr = str;
//     return str === newStr.split('').reverse().join('');
// }


// Another solution using every
// function palindrome(str){
//     return str.split('').every((cha, i) => {
//         return cha === str[str.length - i - 1]
//     })
// }

// Another solution 
function palindrome(str){
    return str === str.split('').reduce((rev,cha) => {
        return cha + rev
    },'')
}

module.exports = palindrome;
