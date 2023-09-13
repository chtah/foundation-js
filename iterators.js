const prices = [25, 30, 5, 2, 67];
prices.forEach((price, idx) => {
  console.log(price);
});

const newPrices = prices.map((price) => {
  return price * 1.1;
});
console.log(newPrices);
