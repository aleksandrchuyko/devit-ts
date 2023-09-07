"use strict";
const cb = (a) => a;
const f1 = (cb) => {
    return cb(1);
};
const f2 = (a, cb) => {
    return cb(a);
};
const f3 = (a, b, cb) => {
    setTimeout(() => cb([a, b]), 1000);
};
function bulkRun(arr) {
    console.log(cb);
    const funcs = arr.map((set) => {
        let f = set[0];
        let args = set[1];
        console.log(set[0]);
        console.log(set[1]);
        return f(...args, cb);
    });
    console.log(funcs);
}
bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
]);
//# sourceMappingURL=index.js.map