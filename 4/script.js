// 4- Create a function to accept a string and convert it to an array without
// using any built-in function.
//array.push();

// solution : for(of) gives value of array  which is required in this task
let convertStringToArray = (myString) => {
  let myArray = [];
  for (let i of myString) {
    myArray.push(i);
  }
  return myArray;
};
console.log(convertStringToArray("Good Things Take Time"));

// my first try : for(in) gives you  index of array not the value
// let convertStringToArray = (myString) => {
//   let myArray = [];
//   for (let i in myString) {
//     myArray.push(i);
//   }
//   return myArray;
// };
// console.log(convertStringToArray("shima"));
