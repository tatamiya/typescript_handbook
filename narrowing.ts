function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(2, "hoge"));
console.log(padLeft("piyo", "hoge"));

// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll("hoge");
printAll(["hoge", "fuga", "piyo"]);
printAll(null);
printAll([]);
printAll("");
printAll(undefined);

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}
console.log(multiplyAll([0, 2, 5], 8));
console.log(multiplyAll([], 8));
console.log(multiplyAll(null, 8));
console.log(multiplyAll(undefined, 8));

// Equality narrowing
function example(x: string | number, y: string | boolean) {
    console.log(x, y, ":");
    if (x === y) {

        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    } else {
        console.log(x);
        console.log(y)
    }
}
example("hoge", "fuga");
example(1, true);
example("hoge", "hoge");
example("hoge", true);

function printAll2(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll2("hoge");
printAll2(["hoge", "fuga", "piyo"]);
printAll2(null);
printAll2([]);

interface Container {
    value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {
        console.log(container.value * factor);
    }
}
multiplyValue({ value: 1 }, 3);
multiplyValue({ value: null }, 3);
multiplyValue({ value: undefined }, 3);

// instanceof narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
logValue("hoge");
logValue(Date());

// Assignments
let x = Math.random() < 0.5 ? 10 : "hello, world!"; // string | number
x = 1;
console.log(x);
x = "goodbye!";
console.log(x);
// x = true; Error!

// Control flow analysis
function example2() {
    let x: string | number | boolean;
    x = Math.random() < 0.5;
    console.log(x);

    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    } else {
        x = 100;
        console.log(x);
    }
    return x;
}
example2();

// Discriminated unions
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}
interface Triangle {
    kind: "triangle";
    sideLenght: number;
}
type Shape = Circle | Square;
//interface Shape {
//    kind: "circle" | "square";
//    radius?: number;
//    sideLength?: number;
//}
//function getAreaError(shape: Shape) {
//    return Math.PI * shape.radius ** 2;
//}
//type Shape = Circle | Square | Triangle;
function getCircleArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
console.log(getCircleArea({ kind: "circle", radius: 3 }));
//console.log(getArea({ kind: "circle", sideLength: 3 }));
console.log(getCircleArea({ kind: "square", sideLength: 3 }));

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: "circle", radius: 3 }));
//console.log(getArea({ kind: "circle", sideLength: 3 }));
console.log(getArea({ kind: "square", sideLength: 3 }));

