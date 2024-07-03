// (4). Write a mul Function Which will Work Properly When invoked With Following Syntax

function mul(a, b) {
    if (arguments.length === 2) {
        return a * b;
    } else if (arguments.length === 1) {
        return function (b) {
            return a * b;
        };
    } else {
        return function (a, b) {
            return a * b;
        };
    }
}
console.log(mul(2, 4)); // 8