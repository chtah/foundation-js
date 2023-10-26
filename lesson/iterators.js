const prices = [25, 30, 5, 2, 67];
prices.forEach((price, idx) => {
  console.log(idx, price);
});

const newPrices = prices.map((price, idx) => {
  console.log(idx, price);

  //return price * 1.1;
});
//console.log(newPrices);

// const premiumPrices = newPrices.filter((price) => {
//   return price > 30;
// });
// console.log(premiumPrices);

// const sumPrices = newPrices.reduce((a, b) => {
//   return a + b;
// });
// console.log("Sum prices", sumPrices);
