// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/** First Solution */

function steps(n) {
  for (let row = 0; row < n; row++) { // First loop through the rows
    let stairs = '';

    for (let column = 0; column < n; column++) { // Second loop through the columns
      if (column <= row) { // From the diagram drawn, if column is less than or equal to row add #
        stairs += '#';
      } else {
        stairs += ' ';
      }
    }
    console.log(stairs);
  }
}


module.exports = steps;
