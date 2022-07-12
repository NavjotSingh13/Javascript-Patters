/*

*
**
***
****
*****

*/

let n =5;
let star = "";

//Outer Loop for Rows
for (let i=1; i<=n; i++) {
  //Inner Loop for Columns
  for(let j=1; j<=i; j++ ) {
    star += "*";
  }
  star += "\n";
}

console.log(star);