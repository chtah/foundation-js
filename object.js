// const tah = {
//   name: "CHawakorn",
//   age: 27,
//   pet: {
//     name: "leon",
//     age: 2,
//     kind: "cat",
//   },
// };

// const petName = "name"; //ex. receive "name" from other source

// console.log(tah.pet.kind);
// console.log(tah.pet[petName]);
// console.log(tah.pet.petName); //not use because have '' cannot use .

// const tah2 = tah;
// tah2.name = "Han"; // change source value because same as array *change heap not change stack
// console.log(tah);
// console.log(tah2);

// ex---------------------
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

// data.forEach((item, idx) => {
//   console.log("Person", idx + 1);
//   console.log("Name :", item.name);
//   console.log("Age :", item.age);
//   console.log("Job :", item.job);
//   console.log("---------------------");
// });

// for (let i = 0; i < data.length; i++) {
//   console.log("Person:", i + 1);
//   console.log("Name:", data[i].name);
//   console.log("Age:", data[i].age);
//   console.log("Job:", data[i].job);
//   console.log("------------------");
// }

const result = data.reduce((prevVal, val, idx) => {
  return ` ${prevVal}\n
  Person ${idx + 1}\n
  Name: ${val.name}\n
  Age: ${val.age}\n
  Job: ${val.job}
  `;
});
console.log(result);
