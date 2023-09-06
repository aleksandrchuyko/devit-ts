function deepEqual(a: any, b: any): boolean {
  if (a === null || b === null) {
    return false;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    if (typeof a[keysA[i]] === 'object' && typeof b[keysA[i]] === 'object') {
      if (deepEqual(a[keysA[i]], b[keysA[i]])) continue;
      else {
        return false;
      }
    }
    if (a[keysA[i]] !== b[keysA[i]]) return false;
  }
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
    { name: 'test', data: { class: 'v', value: 1 } , title: 'up'},
    { name: 'test', data: { value: 1, class: 'v' } , title: 'up'}
  )
);
console.log(
  deepEqual(
    { name: 'test', data: { class: 'v', value: 1 } },
    { name: 'test', data: { value: 1, class: 'v', title: 5 } }
  )
);
