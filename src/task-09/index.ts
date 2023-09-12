function add(a: number): any {
  // Создаем внутреннюю переменную-состояние, в которой сохраняем сумму
  let currentNumber = a;

  // Функция прибавляющая новые занчения к сохраненному
  function func(b: number) {
    currentNumber += b;
    return func;
  }
  
  // Переопределяем метод toString для возврата сохраненного значения
  // вместо функции калькулятора
  func.toString = function () {
    return currentNumber;
  };

  // Возвращаем функцию калькулятор
  return func;
}

console.log(Number(add(1)(2)));
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); //  == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
