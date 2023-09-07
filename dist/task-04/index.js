"use strict";
function arrayToObject(arr) {
    return arr.reduce((obj, pair) => {
        if (Array.isArray(pair[1])) {
            obj[pair[0]] = arrayToObject(pair[1]);
        }
        else {
            obj[pair[0]] = pair[1];
        }
        return obj;
    }, {});
}
console.log(arrayToObject([
    ['name', 'developer'],
    ['age', 5],
    [
        'skills',
        [
            ['html', 4],
            ['css', 5],
            ['js', 5],
            ['frameworks', [['react', 4], ['node', 'good']]],
        ],
    ],
]));
//# sourceMappingURL=index.js.map