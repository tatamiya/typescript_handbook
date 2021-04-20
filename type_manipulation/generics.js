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
var myIdentity4 = identity;
console.log(myIdentity4("Hello, World!"));
console.log(myIdentity4(1));
var myIdentityNumber = identity;
// Error! console.log(myIdentityNumber("Hello, World!"));
console.log(myIdentityNumber(1));
// Generic Classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(10, 20));
// Error!: console.log(myGenericNumber.add(10, "test"));
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity2(args) {
    console.log(args.length);
    return args;
}
// Error!: loggingIdentity2(3);
loggingIdentity2([1, 3, 5]);
loggingIdentity2({ length: 10, value: 3 });
// Using Type Parameters in Generic Constraints
function getProperty(obj, key) {
    return obj[key];
}
var x1 = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x1, "a"));
// Error!: getProperty(x1, "m");
