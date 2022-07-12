/*

*****
 ****   
  ***
   **
    *
    
*/

let star = "";

function pattern(n) {
for(let i=1; i<=n; i++) {
  for(let j=2; j<=i; j++) {
    star += " ";
  }
  for(let k=n; k>=i; k--) {
    star += "*";
  }
  star += "\n";
}
return star;
}

console.log(pattern(5));