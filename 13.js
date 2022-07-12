/*

    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *    
    
*/



    
let star = "";
let n = 5;

for (i=1; i<=n; i++) {
  for (j=1; j<=n-i; j++) {
    star += " ";
  }
  for (k=1; k<=i; k++) {
    star += "*";
  }
  star += "\n";
}

for (i=1; i<=n-1; i++) {
  for (j=1; j<=i; j++) {
    star += " ";
  }
  for (k=1; k<=n-i; k++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);

 