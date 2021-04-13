// Function Type Expressions
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    fn("Hello, World");
}
function printToConsole(s: string) {
    console.log(s);
}
greeter(printToConsole);

// Call Signatures
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned" + fn(6));
}

// Generic Functions
//function firstElement(arr: any[]) {
//return arr[0];
//}
function firstElement<Type>(arr: Type[]): Type {
    return arr[0]
}
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([1, 2, 3]));

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
console.log(map(["1", "2", "3"], (n) => parseInt(n)));

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
console.log(longest([1, 2], [1, 2, 3]));
console.log(longest("alice", "bob"));
//console.log(longest(10, 100));

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
console.log(combine([1, 2, 3], [4, 5, 6]));
//console.log(combine([1, 2, 3], ["hello"]));
console.log(combine<string | number>([1, 2, 3], ["hello"]));

// Optional Parameters
function f(n?: number) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
f(10);

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

// Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
console.log(makeDate(12345678));
console.log(makeDate(5, 5, 5));
//console.log(makeDate(1, 3));