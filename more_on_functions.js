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
// Rest Parameters and Arguments
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
console.log(multiply(10, 1, 2, 3, 4));
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.push.apply(arr1, arr2));
// Same as: console.log(arr1.push(4, 5, 6));
// Error: console.log(arr1.push([4, 5, 6]));
console.log(arr1);
// Error: const args = [8, 5];
var args = [8, 5];
console.log(Math.atan2.apply(Math, args));
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
var f1 = function () {
    return true;
};
var f2 = function () { return true; };
var f3 = function () {
    return true;
};
console.log(f1());
console.log(f2());
console.log(f3());
var src = [1, 2, 3];
var dst = [0];
// forEach method expects a function which returns void
src.forEach(function (el) { return dst.push(el); });
console.log(dst);
// function f4(): void {
//     return true;
// }
