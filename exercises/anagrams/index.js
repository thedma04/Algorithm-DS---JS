// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}


/** FIRST SOLUTION, USING CHARACTER MAP */
/*
function buildCharMap(str) {
  const charMap = {};

  for (const cha of str) {
    charMap[cha] = charMap[cha]++ || 1;
  }
  return charMap;
}


function anagrams(String1, String2) {
  if (cleanString(String1).length !== cleanString(String2).length) {
    return false;
  }

  const charMap1 = buildCharMap(String1);
  const charMap2 = buildCharMap(String2);

  for (const cha in charMap1) {
    if (charMap1[cha] !== charMap2[cha]) return false;
  }
  return true;
}
*/


/** SECOND SOLUTION using split and sort function */
const anagrams = (String1, String2) => (
  cleanString(String1).split('').sort().join('') === cleanString(String2).split('').sort().join('')
);

module.exports = anagrams;
