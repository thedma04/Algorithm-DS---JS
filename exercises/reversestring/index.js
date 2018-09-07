// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//* * First Method -- Using Reverse method of array */

const reverseString = word => (
  word
    .split('')
    .reverse()
    .join('')
);

module.exports = reverseString;
