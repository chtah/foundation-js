/*
a = [1, 2, 3, 4, 5];
let sum = 0;
a.forEach((num) => {
  sum += num;
  console.log(sum);
});
console.log(sum);
*/

/*
const callMe = () => {
  console.log("Hello");
};

const greeting = (callBack) => {
  console.log("Greeting");
  callBack();
};

greeting(callMe);
*/

//Annonymous Function---------

/*
const greeting = (a) => {
  console.log("Greeting");
  a("Tah");
};

greeting((name) => {
  console.log(`I am human : My name is ${name}`);
});
*/

/*
const oneArr = [1, 2, 3, 4, 5];

const printArr = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

printArr(oneArr, (item) => {
  console.log(item);
});
*/

/*
const oneArr = [1, 2, 3, 4, 5];

const mapArr = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }
  return result;
};

const newArr = mapArr(oneArr, (item) => {
  return item * 2;
});

console.log(newArr);
*/

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      /*(isKeeping === true)*/ result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0;
  /*if (item >= 0) {
    return true;
  } else {
    return false;
  }*/
});

console.log(afterFilter);
