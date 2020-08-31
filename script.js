function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}

sum(5)(-3);
sum(1)(4);
sum(2)(-7);