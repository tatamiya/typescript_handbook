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