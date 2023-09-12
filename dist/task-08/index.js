"use strict";
console.log('object');
function combos(n, arr = []) {
    let parts = [...arr];
    if (n === 0) {
        console.log(arr);
    }
    else {
        for (let i = 1; i <= n; i++) {
            if (parts.length === 0 || parts[parts.length - 1] <= i) {
                parts.push(i);
                combos(n - i, parts);
            }
        }
    }
}
combos(3);
//# sourceMappingURL=index.js.map