"use strict";
function objectToArray(obj) {
    let keys = Object.keys(obj);
    return keys.reduce((arr, key) => {
        if (obj[key] !== null && typeof obj[key] === 'object') {
            let temp = [key, objectToArray(obj[key])];
            arr.push(temp);
            return arr;
        }
        else {
            let temp = [key, obj[key]];
            arr.push(temp);
            return arr;
        }
    }, []);
}
console.log(objectToArray({
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5,
    },
}));
//# sourceMappingURL=index.js.map