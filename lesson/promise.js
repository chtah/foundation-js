let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Found data");
    } else {
      reject("Data not found");
    }
  }, 3000);
});

console.log(data);

data
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("done");
  });
