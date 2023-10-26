// const first = (n) => {
//   let newText = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         newText += "+";
//       } else {
//         newText += "\n";
//         break;
//       }
//     }
//   }
//   console.log(newText);
// };

// first(5);

//---------------------------------------------

// const second = (n) => {
//   let newText = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i === n) {
//         if (j <= i) {
//           newText += "+";
//         }
//       } else if (i > 2) {
//         if (j === 1) {
//           newText += "+";
//         } else if (j === i) {
//           newText += "+";
//           newText += "\n";
//         } else if (j <= i) {
//           newText += "s";
//         }
//       } else if (j <= i) {
//         newText += "+";
//       } else {
//         newText += "\n";
//         break;
//       }
//     }
//   }
//   console.log(newText);
// };

// second(9);

//---------------------------------------------

// const third = (n) => {
//   let newText = "";
//   let nn = n;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= nn + (n - 1); j++) {
//       if (j <= nn - 1) {
//         newText += "s";
//       } else {
//         newText += "+";
//       }

//       if (j === nn + (n - 1)) {
//         if (i === n) {
//           break;
//         }
//         newText += "\n";
//         break;
//       }
//     }
//     nn--;
//   }
//   console.log(newText);
// };

// third(10);

//---------------------------------------------

// const fourth = (n) => {
//   let newText = "";
//   let nn = n;
//   for (let i = 1; i <= n + (n - 1); i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i <= n) {
//         if (j <= i) {
//           newText += "+";
//         }

//         if (i === j) {
//           newText += "\n";
//         }
//       }

//       if (i > n) {
//         if (j <= nn - 1) {
//           newText += "+";
//         }

//         if (j === nn - 1) {
//           if (i === n + (n - 1)) {
//             break;
//           }
//           newText += "\n";
//         }
//       }
//     }
//     if (i > n) {
//       nn--;
//     }
//   }
//   console.log(newText);
// };

// fourth(5);

//---------------------------------------------

// const fifth = (n) => {
//   let newText = "";
//   let nn = n;
//   let pp = 1;
//   let nneg = n;
//   let npos = n;
//   for (let i = 1; i <= n + (n - 1); i++) {
//     for (let j = 1; j <= n + npos; j++) {
//       if (i < n) {
//         if (j <= nneg - 1) {
//           newText += "s";
//         }

//         if (j > nneg - 1) {
//           newText += "+";
//         }

//         if (j === npos) {
//           newText += "\n";
//           break;
//         }
//       }

//       if (i === n) {
//         if (j <= npos) {
//           newText += "+";
//         }

//         if (j > npos) {
//           newText += "\n";
//           break;
//         }
//       }

//       if (i > n) {
//         if (j <= pp) {
//           newText += "s";
//         }

//         if (j > pp) {
//           newText += "+";
//         }

//         if (j === nn + (n - 2)) {
//           newText += "\n";
//           break;
//         }
//       }
//     }
//     if (i > n) {
//       nn--;
//       pp++;
//     }
//     nneg--;
//     npos++;
//   }
//   console.log(newText);
// };

// fifth(8);

//----------------------------------------

//console.log([...new Array(5)].map(() => "*").join(""));
//console.log([...new Array(5)].map(() => "*"));
