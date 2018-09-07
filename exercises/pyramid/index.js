// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// First solution
// function pyramid(n) {
//     const midpoint = Math.floor((2*n -1) / 2)
//     for(let row=0; row<n; row++){
//       let levels = ''
      
//       for(let column=0; column < 2 * n -1; column++){
//         if(midpoint - row <= column && midpoint + row >= column){
//            levels += '#'
//         }else {
//            levels += ' '
//         }
//       }
//       console.log(levels)
//     }
// }

// Second using recursion
function pyramid(n, row=0, levels=''){
    const midpoint = Math.floor((2*n-1)/2)
    if(n === row){
        return
    }

   if(levels.length === 2 * n -1){
       console.log(levels)
       return pyramid(n, row+1)
   }
   let add;
   if(midpoint - row <= levels.length && midpoint + row >= levels.length){
     add = '#'
   }else {
       add = ' '
   }
   pyramid(n, row, levels + add)
}
module.exports = pyramid;
