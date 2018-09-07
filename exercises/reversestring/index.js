// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//* * First Method -- Using Reverse method of array */
/*
const reverseString = word => (
  word
    .split('')
    .reverse()
    .join('')
);

module.exports = reverseString;
*/

/** Second Method Using For of Loop */

const reverseString = (word) => {
  let finalWord = '';

  for (const cha of word) {
    finalWord = cha + finalWord; // Remember to add it as first element
  }

  return finalWord;
};

module.exports = reverseString;
