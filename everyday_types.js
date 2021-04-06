var myName = "Alice";
// Functions
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(myName);
// greet(42) type error!
function getFavoriteNumber() {
    return 26;
}
;
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for anonymous functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing for arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Object Types
function printCoord(pt) {
    console.log("The coordinate's x value is ", pt.x);
    console.log("The coordinate's y value is ", pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a;
    console.log("Your first name is ", obj.first.toUpperCase());
    if (obj.last !== undefined) {
        console.log("Your last name is ", obj.last.toUpperCase());
    }
    console.log("Hi, " + ((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + "!");
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
