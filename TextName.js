let row = "";
for (let i = 7; i > 0; i--) {
  for (let j = 7; j > 0; j--) {
    row += "*";
    if (j === 1) {
      row += "\n";
    }
  }
}
console.log(row);
// iHori.push("*");
// console.log(iHori.join(""));
