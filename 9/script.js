// 9- Write a program to check if given year is a leap year or not and it should
// return false if not and true otherwise.
//(۱۳۹۱+۲۳۴۶)×(۰/۲۴۲۱۹۸۵۸۱۵۶) =۹۰۵/۰۹۶۰۹۹۲۹۱

//https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D9%87%D8%AC%D8%B1%DB%8C_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%DB%8C_%D8%AD%D8%B3%D8%A7%D8%A8%DB%8C
//گاهشماری حسابی رایانه‌ای
let hijriCheckLeapYear = (year) => {
  let number = (year + 2346) * 0.24219858156;
  let result = number - Math.floor(number);
  if (result < 0.24219858156) {
    //return true;
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is Not leap year`);
    //return false;
  }
};

hijriCheckLeapYear(1391);
hijriCheckLeapYear(1399);
hijriCheckLeapYear(1400);
hijriCheckLeapYear(1401);
hijriCheckLeapYear(1402);
hijriCheckLeapYear(1403);
hijriCheckLeapYear(1404);
hijriCheckLeapYear(1405);
hijriCheckLeapYear(1406);
hijriCheckLeapYear(1407);
hijriCheckLeapYear(1408);
hijriCheckLeapYear(1409);
hijriCheckLeapYear(1410);
hijriCheckLeapYear(14011);

//https://en.wikipedia.org/wiki/Leap_year : Gregorian calendar

let gregorianCheckLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is Not leap year`);
  }
};
gregorianCheckLeapYear(2004);
gregorianCheckLeapYear(2000);
gregorianCheckLeapYear(1600);
gregorianCheckLeapYear(1700);
gregorianCheckLeapYear(1800);
gregorianCheckLeapYear(1900);
