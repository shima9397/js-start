// 11- Define a function to accept a javascript object literal as follow and create
// a log message to the console with date and time of the print (Hints:
// 1- Object
// 2- Date and time).

let messageBag = {
  exceptions: {
    1: {
      num: 1009,
      message: "Network Connection Error!",
    },
    2: {
      num: 1002,
      message: "User is not logged-in.",
    },
  },
};

let prettyPrintMessageLog = (myObject) => {
  let currentTime = new Date();
  //   console.log(currentTime);

  for (let item in myObject.exceptions) {
    console.log(
      `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDay()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} Error Number ${
        myObject.exceptions[item].num
      } : ${myObject.exceptions[item].message}`
    );
  }
};

prettyPrintMessageLog(messageBag);

//figure out how to create 2digits instead one (for example 08 instead 8) later :
//for example:getMonth() < 10 ?  getMonth() = '0'+getMonth() : getMonth();
// 2021-8-5 12:7:24
// 2021-8-5 12:7:24

// 2020-12—01 12:10:34
// 2020-12—01 12:10:34
