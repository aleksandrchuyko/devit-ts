"use strict";
function add(a) {
    let currentNumber = a;
    function func(b) {
        currentNumber += b;
        return func;
    }
    func.toString = function () {
        return currentNumber;
    };
    return func;
}
console.log(Number(add(1)(2)));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
//# sourceMappingURL=index.js.map