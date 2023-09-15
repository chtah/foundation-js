let row = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 7; j++) {
    if (j <= i) {
      row += "*";
    }
    if (j === 7) {
      row += "\n";
    }
  }
}
console.log(row);
