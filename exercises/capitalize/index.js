// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/** FIRST SOLUTION */
/*
function capitalize(str) {
  const words = [];

  for (const wrd of str.split(' ')) {
    words.push(wrd[0].toUpperCase() + wrd.slice(1));
  }

  return words.join(' ');
}
*/

/** SECOND SOLUTION */

// Pattern -- There should be capital letter after every space
function capitalize(str) {
  let result = str[0].toUpperCase(); // Capitalize the first words since there is no space before

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') { // Check the previous character if its space the capitalize it
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
