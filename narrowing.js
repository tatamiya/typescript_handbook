function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(2, "hoge"));
console.log(padLeft("piyo", "hoge"));
// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are " + numUsersOnline + " online now!";
    }
    return "Nobody's here. :(";
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll("hoge");
printAll(["hoge", "fuga", "piyo"]);
printAll(null);
printAll([]);
printAll("");
printAll(undefined);
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
console.log(multiplyAll([0, 2, 5], 8));
console.log(multiplyAll([], 8));
console.log(multiplyAll(null, 8));
console.log(multiplyAll(undefined, 8));
// Equality narrowing
function example(x, y) {
    console.log(x, y, ":");
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example("hoge", "fuga");
example(1, true);
example("hoge", "hoge");
example("hoge", true);
function printAll2(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
                var s = strs_2[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll2("hoge");
printAll2(["hoge", "fuga", "piyo"]);
printAll2(null);
printAll2([]);
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value * factor);
    }
}
multiplyValue({ value: 1 }, 3);
multiplyValue({ value: null }, 3);
multiplyValue({ value: undefined }, 3);
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue("hoge");
logValue(Date());
// Assignments
var x = Math.random() < 0.5 ? 10 : "hello, world!"; // string | number
x = 1;
console.log(x);
x = "goodbye!";
console.log(x);
// x = true; Error!
// Control flow analysis
function example2() {
    var x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
example2();
//interface Shape {
//    kind: "circle" | "square";
//    radius?: number;
//    sideLength?: number;
//}
//function getAreaError(shape: Shape) {
//    return Math.PI * shape.radius ** 2;
//}
//type Shape = Circle | Square | Triangle;
function getCircleArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
console.log(getCircleArea({ kind: "circle", radius: 3 }));
//console.log(getArea({ kind: "circle", sideLength: 3 }));
console.log(getCircleArea({ kind: "square", sideLength: 3 }));
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: "circle", radius: 3 }));
//console.log(getArea({ kind: "circle", sideLength: 3 }));
console.log(getArea({ kind: "square", sideLength: 3 }));
