// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   const charsMap = {}
   let max = 0
   let maxChar = ''
   for(let cha of str){
     charsMap[cha] = charsMap[cha] + 1 || 1
   }
   
   for(let hit in charsMap){
       if(charsMap[hit] > max){
           max = charsMap[hit]
           maxChar = hit
       }
   }
   return maxChar
}


//maxChar('Hello am here')
module.exports = maxChar;
