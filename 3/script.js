// 3- Create a function to accept a string and return the string with all
// characters in small. In addition use arrow function syntax to write it.

//with return
let changeToLowercase = (myString) => {
  return myString.toLowerCase();
};

console.log(`SHIMA changed to lowercase:  ${changeToLowercase("SHIMA")}`);

//without return
let changeToLowercase1 = (myString) => myString.toLowerCase();
console.log(`NEJatI changed to lowercase:  ${changeToLowercase("NEJatI")}`);
