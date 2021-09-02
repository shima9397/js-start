// 7- Interview Question: What is Call Stack? Show it with a small example.
//https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
function goWindowShopping() {
  console.log("start");
  goOut();
}

function goOut() {
  console.log("go outside to stores");
  justLook();
}

function justLook() {
  console.log("just looking window stores");
  lookAtPrices();
}

function lookAtPrices() {
  console.log("look at prices");
  breath();
}

function breath() {
  console.log("take a deep breath");
  backHome();
}

function backHome() {
  console.log("walk home");
  console.log("congratulations! you saved your money");
}

goWindowShopping();

//LIFO : Last In First Out
//Add goWindowShopping to call stack list
//Add goOut to call stack list
//Add justLook to call stack list
//Add lookAtPrices to call stack list
//Add breath to call stack list
//Add backHome to call stack list

// -backHome()
// -breath()
// -lookAtPrices()
// -justLook()
// -goOut()
// -goWindowShopping()

//Execute backHome() to its end
//then Execute breath() to its end
//then Execute lookAtPrices() to its end
//then Execute justLook() to its end
//then Execute goOut() to its end
//then Execute goWindowShopping() to its end

// empty stack
