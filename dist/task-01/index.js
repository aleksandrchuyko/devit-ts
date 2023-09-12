"use strict";
function deepEqual(a, b) {
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
        if (typeof a[keysA[i]] === 'object' && typeof b[keysB[i]] === 'object') {
            if (deepEqual(a[keysA[i]], b[keysB[i]]))
                continue;
            else {
                return false;
            }
        }
        if (a[keysA[i]] !== b[keysB[i]])
            return false;
    }
    return true;
}
console.log(deepEqual({ name: 'test' }, { name: 'test' }));
console.log(deepEqual({ name: 'test' }, { name: 'test1' }));
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } }));
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 }));
console.log(deepEqual({ name: 'test', data: { class: 'v', value: 1 }, title: 'up' }, { name: 'test', data: { value: 1, class: 'v' }, title: 'up' }));
console.log(deepEqual({ name: 'test', data: { class: 'v', value: 1 } }, { name: 'test', data: { value: 1, class: 'v', title: 5 } }));
//# sourceMappingURL=index.js.map