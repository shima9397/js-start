// 8- Write a function to accept a n integer and check it is even (Hint: use %
//   operator). Function should only accept integer.

let checkEven = (myInteger) => {
  if (Number.isInteger(myInteger) === true) {
    if (myInteger % 2 === 0) {
      console.log("myInteger is even");
    } else {
      console.log("myInteger is not even");
    }
  } else {
    console.log("you should input an integer");
  }
};

checkEven(17.9);
checkEven(36);
checkEven(17);
