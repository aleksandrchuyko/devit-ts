function deepEqual(a: any, b: any): boolean {
  //Проверки для раннего возврата
  if (a === null || b === null) {
    return false;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }
  // Массивы свойств объектов
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }
  //Строгая проверка эквивалентности - свойства и их значения равны,
  // свойства идут в одинаковой последовательности
  for (let i = 0; i < keysA.length; i++) {
    if (typeof a[keysA[i]] === 'object' && typeof b[keysB[i]] === 'object') {
      //если значения свойств объектов - объекты, рекурсивно вызываем функцию проверки
      if (deepEqual(a[keysA[i]], b[keysB[i]])) continue;
      else {
        return false;
      }
    }
    if (a[keysA[i]] !== b[keysB[i]]) return false;
  }
  // Вариант нестрогой проверки - только свойства и их значения
  // без учета последовательности

  // for (let i = 0; i < keysA.length; i++) {
  //   if (typeof a[keysA[i]] === 'object' && typeof b[keysA[i]] === 'object') {
  //     if (deepEqual(a[keysA[i]], b[keysA[i]])) continue;
  //     else {
  //       return false;
  //     }
  //   }
  //   if (a[keysA[i]] !== b[keysA[i]]) return false;
  // }
  return true;
}

console.log(deepEqual({ name: 'test' }, { name: 'test' })); // output true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // output false
console.log(
  deepEqual(
    { name: 'test', data: { value: 1 } },
    { name: 'test', data: { value: 2 } }
  )
); // output false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false
console.log(
  deepEqual(
    { name: 'test', data: { class: 'v', value: 1 }, title: 'up' },
    { name: 'test', data: { value: 1, class: 'v' }, title: 'up' }
  )
);
console.log(
  deepEqual(
    { name: 'test', data: { class: 'v', value: 1 } },
    { name: 'test', data: { value: 1, class: 'v', title: 5 } }
  )
);
