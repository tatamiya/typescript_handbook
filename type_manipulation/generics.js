// Hello World of Generics
function identity(arg) {
    return arg;
}
console.log(identity("Hello, World!"));
console.log(identity(1));
// Working with Generic Type Variables
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity(["hoge", "fuga"]));
console.log(loggingIdentity([1, 2, 3]));
console.log(loggingIdentity([1, "hoge", 3]));
// Generic Types
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentityNumber = identity;
console.log(myIdentityNumber(1));
console.log(myIdentityNumber("Hello, World!"));
