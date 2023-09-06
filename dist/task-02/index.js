"use strict";
function chunkArray(arr, slices) {
    let chunks = [];
    while (arr.length > 0) {
        chunks.push(arr.splice(0, slices));
    }
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < chunks.length
                ? { value: chunks[nextIndex++], done: false }
                : { value: undefined, done: true };
        },
    };
}
let iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//# sourceMappingURL=index.js.map