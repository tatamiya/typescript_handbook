// Hello World of Generics
function identity<Type>(arg: Type): Type {
    return arg
}
console.log(identity("Hello, World!"));
console.log(identity(1));

// Working with Generic Type Variables
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity(["hoge", "fuga"]));
console.log(loggingIdentity([1, 2, 3]));
console.log(loggingIdentity([1, "hoge", 3]));

// Generic Types
let myIdentity1: <Type>(arg: Type) => Type = identity;
let myIdentity2: <Input>(arg: Input) => Input = identity;
let myIdentity3: { <Type>(arg: Type): Type } = identity;
interface GenericIdentityFn1 {
    <Type>(arg: Type): Type;
}
let myIdentity4: GenericIdentityFn1 = identity;
console.log(myIdentity4("Hello, World!"));
console.log(myIdentity4(1));
interface GenericIdentityFn2<Type> {
    (arg: Type): Type;
}
let myIdentityNumber: GenericIdentityFn2<number> = identity;
// Error! console.log(myIdentityNumber("Hello, World!"));
console.log(myIdentityNumber(1));

// Generic Classes
class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
}
console.log(myGenericNumber.add(10, 20));
// Error!: console.log(myGenericNumber.add(10, "test"));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
}
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// Generic Constraints
interface Lengthwise {
    length: number;
}
function loggingIdentity2<Type extends Lengthwise>(args: Type): Type {
    console.log(args.length);
    return args;
}
// Error!: loggingIdentity2(3);
loggingIdentity2([1, 3, 5]);
loggingIdentity2({ length: 10, value: 3 });

// Using Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}
let x1 = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x1, "a"));
// Error!: getProperty(x1, "m");

// Using Class Types in Generics
function create<Type>(c: { new(): Type }): Type {
    return new c();
}
