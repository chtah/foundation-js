const grade = (score) => {
  const x = Math.round(score);
  if (x < 0 || x > 100) {
    console.log("“Please enter score between 0 and 100”");
  } else if (x >= 80) {
    console.log("“You got A”");
  } else if (x >= 70) {
    console.log("“You got B”");
  } else if (x >= 60) {
    console.log("“You got C”");
  } else if (x >= 50) {
    console.log("“You got D”");
  } else {
    console.log("“You got F”");
  }
};
grade(85);
grade(65);
grade(79.5);
grade(101);
grade(-5);
grade(50.5);
grade(49.4);
