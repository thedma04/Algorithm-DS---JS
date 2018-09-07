// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//* * Solution */

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // Loop through the string and hierachy them into object
  for (const cha of str) {
    charMap[cha] = charMap[cha]++ || 1;
  }

  Object.entries(charMap).forEach(([txt, num]) => {
    if (num > max) {
      max = num;
      maxChar = txt;
    }
  });
  return maxChar;
}
module.exports = maxChar;
