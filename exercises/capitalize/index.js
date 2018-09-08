// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/** FIRST SOLUTION */

function capitalize(str) {
  const words = [];

  for (const wrd of str.split(' ')) {
    words.push(wrd[0].toUpperCase() + wrd.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;
