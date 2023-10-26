// const fetchData = () => Promise.reject("data not found");
// console.log(fetchData());
// const getData = async () => {
//   try {
//     const res = await fetchData();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("done");
//   }
// };

//getData();

const fetchData1 = () => Promise.resolve("Data1");
const fetchData2 = () => Promise.reject("Data2");
const fetchData3 = () => Promise.resolve("Data3");

const getAllData = async () => {
  try {
    const data1 = await fetchData1();
    const data2 = await fetchData2();
    const data3 = await fetchData3();

    console.log(data1);
    console.log(data2);
    console.log(data3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done");
  }
};

getAllData();
