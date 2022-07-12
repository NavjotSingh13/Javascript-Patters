/*

*********
 *******
  *****
   ***
    *

*/



let n = 5;
let star = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += " ";
  }
  for (let k = 9; k >= 2 * i - 1; k--) {
    star += "*";
  }
  star += "\n";
}
console.log(star);