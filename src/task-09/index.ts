function add(a: number): any {
  let currentNumber = a;

  function func(b: number) {
    currentNumber += b;
    return func;
  }

  func.toString = function () {
    return currentNumber;
  };

  return func;
}

console.log(Number(add(1)(2)));
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); //  == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
