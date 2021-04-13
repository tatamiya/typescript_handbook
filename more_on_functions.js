function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned" + fn(6));
}
// Generic Functions
//function firstElement(arr: any[]) {
//return arr[0];
//}
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([1, 2, 3]));
function map(arr, func) {
    return arr.map(func);
}
console.log(map(["1", "2", "3"], function (n) { return parseInt(n); }));
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
console.log(longest([1, 2], [1, 2, 3]));
console.log(longest("alice", "bob"));
//console.log(longest(10, 100));
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combine([1, 2, 3], [4, 5, 6]));
//console.log(combine([1, 2, 3], ["hello"]));
console.log(combine([1, 2, 3], ["hello"]));
// Optional Parameters
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
f(10);
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], function (a) { return console.log(a); });
myForEach([1, 2, 3], function (a, i) { return console.log(a, i); });
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
console.log(makeDate(12345678));
console.log(makeDate(5, 5, 5));
//console.log(makeDate(1, 3));
