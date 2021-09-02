//for loop: I made i&j to build row&column but it was not enough to break line in document(didn't know)
// var N = 9;
// var output = " ";
// for (let i = 1; i <= N; i++) {
//   document.write("</br>");
//   for (let j = 1; j <= i; j++) {
//     output += j + " ";
//   }
//   console.log(output);
//   document.write(output);

//   output = " ";
// }

// when you use log() method :
// By default, the log() method prints on console with trailing newline
for (let N = 1, output = " "; N < 10; N++) {
  output += N + " ";
  console.log(output);
  document.write(output);
  document.write("</br>");
}

//while loop
// let N = 1,
//   output = " ";
// while (N < 10) {
//   output += N + " ";
//   console.log(output);
//   document.write(output);
//   document.write("</br>");
//   N++;
// }

//do while
// let N = 1,
//   output = " ";
// do {
//   output += N + " ";
//   console.log(output);
//   document.write(output);
//   document.write("</br>");
//   N++;
// } while (N < 10);
