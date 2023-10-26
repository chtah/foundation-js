const { firstName, lastName, ...otherInfo } = {
  firstName: "John",
  lastName: "Doe",
  companyName: "Cleverse",
  job: "Front-end Developer",
  gender: "Male",
};
//console.log(otherInfo);

const obj1 = { value1: "Apple", x: 42 };
const obj2 = { value2: "Banana", y: 13 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
