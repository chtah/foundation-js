const countTen = () => {
  for (i = 1; i <= 10; i++) {
    [console.log(i)];
  }
};
//countTen();

const Arr = ["A", "B", "C", "D", "E"];
const countArr = () => {
  for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
  }
};
//countArr();

const reCountArr = () => {
  for (i = Arr.length - 1; i >= 0; i--) {
    console.log(Arr[i]);
  }
};
//reCountArr();

const breakLoop = () => {
  for (i = 0; i < Arr.length; i++) {
    if (Arr[i] === "C") {
      break;
    }
    console.log(Arr[i]);
  }
};
//breakLoop();

const continueLoop = () => {
  for (i = 0; i < Arr.length; i++) {
    if (Arr[i] === "C") {
      continue;
    }
    console.log(Arr[i]);
  }
};
//continueLoop();

const whileLoop = () => {
  let i = 1;
  while (i < 100) {
    i = i + 2;
  }
  console.log(i);
};
//whileLoop();

const evenOddCount = () => {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 1) {
      console.log(i + " is odd");
    } else {
      console.log(i + " is even");
    }
  }
};
evenOddCount();
