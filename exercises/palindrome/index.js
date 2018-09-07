// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/** FIRST SOLUTION using Reverse Function */

/*
const palindrome = str => (
  str === str.split('').reverse().join('')
);
*/

/** SECOND SOLUTION using reduce function */

/*
const palindrome = str => (
  str === str.split('').reduce((reversed, cha) => cha + reversed, '')
); */


//* * THIRD SOLUTION using every */
// This solution is expensive due to multiple comparism

const palindrome = str => (
  str
    .split('')
    .every((cha, i) => cha === str[str.length - i - 1])
);

module.exports = palindrome;
