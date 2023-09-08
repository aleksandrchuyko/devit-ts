"use strict";
class NotificationException {
}
class ErrorException {
}
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    }
    else if (rand > 0.85) {
        throw new ErrorException();
    }
    else {
        throw new NotificationException();
    }
}
function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    }
    catch (e) {
        if (e instanceof NotificationException) {
            console.log('NotificationException');
            return reliableMultiply(a, b);
        }
        else if (e instanceof ErrorException) {
            throw e;
        }
        else {
            throw new Error('Unknown exception');
        }
    }
}
console.log(reliableMultiply(8, 8));
//# sourceMappingURL=index.js.map