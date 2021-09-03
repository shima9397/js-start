// 10- write a function increase() and decrease() which increase variable
// product_count variable by one and decrease it by one. product_count can not
// be greater than equal given argument to increase. For example increase(12)
// can increase product_count to 12 and not more than that. Also
// product_count can not be less than 0.
let product_count = 0;

let increase = (update) => {
  if (update === undefined) {
    return (product_count += 1);
  } else {
    return update > product_count ? (product_count = update) : product_count;
  }
};
// console.log(increase());
// console.log(increase());
// console.log(increase(12));
// console.log(increase(6));
// console.log(increase(60));

let decrease = (update) => {
  if (update === undefined) {
    if (product_count == 0) throw "product_count can not equal 0";
    else {
      return (product_count -= 1);
    }
  } else {
    return update < product_count && product_count !== 0
      ? (product_count = update)
      : product_count;
  }
};

try {
  console.log(decrease());
} catch (e) {
  console.error(e);
}

console.log("before error");
console.log(decrease());
console.log("after error");
console.log(decrease());
console.log(decrease());
console.log(decrease());
console.log(decrease(9));
console.log(decrease(5));
console.log(decrease(10));
console.log(decrease(90));

/* I used ternary condition in block code of if-else. wrong or bad practice !?*/
