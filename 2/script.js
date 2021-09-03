// 2- Write a function to that accepts a number and change it to integer.
// For example:

// convertToInt(6.0); // Output to console: 6
// convertToInt(NaN); // Output to console: 0 ?
// convertToInt(null); // Output to console: 0 ?
// convertToInt(12); // Output to console: 12
// convertToInt(-1); // Output to console: -1
// convertToInt(“23”) // Output to console: 23
// convertToInt(false) // Output to console: 23 ?

// In addition if Boolean value given as input your function should throw and
// exception.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
let myNumber;
let convertToInt = (inputNumber) => {
  if (typeof inputNumber === "boolean") {
    throw "inputNumber can not be boolean!";
  }

  return parseInt(inputNumber);
};

try {
  convertToInt(true);
} catch (e) {
  console.error(e);
}
myNumber = 43.98;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = NaN;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = null;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = 12;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = -1;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = true;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer:  ${convertToInt(
    myNumber
  )}`
);
myNumber = "23";
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = "shima";
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer: ${convertToInt(
    myNumber
  )}`
);
myNumber = false;
console.log(
  `typeof myNumber is : ${typeof myNumber} and converted to integer:  ${convertToInt(
    myNumber
  )}`
);
