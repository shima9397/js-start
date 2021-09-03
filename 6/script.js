let getSmallestWordSize = (myString) => {
  let myArray = [];
  myArray = myString.split(" ");

  let smallestLength = myArray[0].length;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length < smallestLength) {
      smallestLength = myArray[i].length;
    }
  }
  return smallestLength;
  //return getSmallestWordSize();
};

console.log(getSmallestWordSize("Big dream big act"));
console.log(getSmallestWordSize("hard work is the furmula for success"));
