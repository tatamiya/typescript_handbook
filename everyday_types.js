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
    console.log("Your first name is ", obj.first.toUpperCase());
    if (obj.last !== undefined) {
        console.log("Your last name is ", obj.last.toUpperCase());
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
// Union Types
function printId(id) {
    if (typeof id === "string") {
        console.log("Your ID is: " + id.toUpperCase());
    }
    else {
        console.log("Your ID is: " + id);
    }
}
printId(101);
printId("202");
// printId({ myID: 22342 }); type error!
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("hoge");
welcomePeople(["hoge", "fuga", "piyo"]);
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord3({ x: 100, y: 100 });
// printCoord3({ x: 100, y: 100, z: 100 }); type error!
// Literal Types
function printText(s, alignment) {
    console.log(s + " is aligned at " + alignment);
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); Error!
// null and undefined
function liveDangerously(x) {
    console.log(x.toFixed());
}
liveDangerously(1);
// liveDangerously(undefined);
