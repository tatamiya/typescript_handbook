let myName: string = "Alice";

// Functions
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet(myName)
// greet(42) type error!

function getFavoriteNumber(): number {
    return 26;
};


const names = ["Alice", "Bob", "Eve"];

// Contextual typing for anonymous functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});

// Contextual typing for arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});

// Object Types

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is ", pt.x);
    console.log("The coordinate's y value is ", pt.y);

}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
    console.log("Your first name is ", obj.first.toUpperCase());
    if (obj.last !== undefined) {
        console.log("Your last name is ", obj.last.toUpperCase());
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });