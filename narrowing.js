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
