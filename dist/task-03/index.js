"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const f1 = (cb) => { cb(1); };
const f2 = (a, cb) => { cb(a); };
const f3 = (a, b, cb) => { setTimeout(() => cb([a, b]), 1000); };
function bulkRun(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = arr.map((set) => {
            let f = set[0];
            let args = set[1];
            return new Promise((resolve) => {
                f(...args, resolve);
            });
        });
        return Promise.all(promises);
    });
}
bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]],
]).then(console.log);
//# sourceMappingURL=index.js.map