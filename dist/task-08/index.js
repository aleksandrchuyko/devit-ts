"use strict";
function combos(n) {
    let results = [];
    function cycle(n, arr = []) {
        if (n === 0) {
            results.push([...arr]);
        }
        else {
            for (let i = 1; i <= n; i++) {
                if (arr.length === 0 || arr[arr.length - 1] <= i) {
                    cycle(n - i, [...arr, i]);
                }
            }
        }
    }
    cycle(n);
    return results;
}
console.log(combos(10));
//# sourceMappingURL=index.js.map