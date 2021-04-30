class Point {
}
const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(`${pt.x}, ${pt.y}`);
// Error!: pt.x = "0";
class PointWithInitialization {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const ptWithInit = new PointWithInitialization();
// Type Error!: ptWithInit.x = "0";
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
const greeter = new Greeter();
// Error!: greeter.name = "also not ok";
class PointWithConstructor {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class PointWithMethod {
    constructor() {
        this.x = 10;
        this.y = 10;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
class CWithGetterAndSetter {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let cGetterSetter = new CWithGetterAndSetter();
// Type Error!: cGetterSetter.length = "hoge";
cGetterSetter.length = 10;
console.log(cGetterSetter.length);
class ClassWithIndexSignatures {
    check(s) {
        return this[s];
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class NameChecker {
    // there should be type annotation for s.
    // otherwise, s is implicitly regarded as 'any'
    check(s) {
        return s.toLowerCase() === "ok";
    }
}
class CWithoutY {
    constructor() {
        this.x = 0;
    }
}
const c = new CWithoutY();
// Error!: c.y = 10;
class AnimalToExtend {
    move() {
        console.log("Moving along!");
    }
}
class DogExtended extends AnimalToExtend {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const aDog = new DogExtended();
aDog.move();
aDog.woof(3);
class BaseForOverride {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived extends BaseForOverride {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("reader");
const b = d; // No problem
b.greet;
class BaseForInitializationOrder {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
}
class DerivedInitializationOrder extends BaseForInitializationOrder {
    constructor() {
        super(...arguments);
        this.name = "derived";
    }
}
const dInitializationOrder = new DerivedInitializationOrder(); // "base"
// Member Visibility
class VisibilityGreeter {
    greet() {
        console.log("Hello, " + this.getName());
    }
    getName() {
        return "hi";
    }
}
class SpecialGreeter extends VisibilityGreeter {
    howdy() {
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet();
// Not allowed: g.getName();
class BaseProtected {
    constructor() {
        this.m = 10;
    }
}
class DerivedProtected extends BaseProtected {
    constructor() {
        super(...arguments);
        this.m = 15; // default is public
    }
}
const dp = new DerivedProtected();
console.log(dp.m);
class BaseCrossHierarchy {
    constructor() {
        this.x = 1;
    }
}
class Derived1 extends BaseCrossHierarchy {
    constructor() {
        super(...arguments);
        this.x = 5;
    }
}
class Derived2 extends BaseCrossHierarchy {
    f1(other) {
        other.x = 10;
    }
}
class BasePrivate {
    constructor() {
        this.x = 0;
    }
}
const bp = new BasePrivate();
// Not allowed: console.log(bp.x);
// class DerivedPrivate extends BasePrivate {
//     showX() {
//         console.log(this.x);
//     }
// }
//class DerivedPrivate extends BasePrivate {
//    x = 1;
//}
class ACross {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
// Static Members
class MyClassWithStaticMembers {
    static printX() {
        console.log(MyClassWithStaticMembers.x);
    }
}
MyClassWithStaticMembers.x = 0;
console.log(MyClassWithStaticMembers.x);
MyClassWithStaticMembers.printX();
class MyClassWithStaticPrivate {
}
MyClassWithStaticPrivate.x = 0;
// Not allowed!: console.log(MyClassWithStaticPrivate.x);
class BaseStatic {
    static getGreeting() {
        return "Hello world";
    }
}
class DerivedStatic extends BaseStatic {
    constructor() {
        super(...arguments);
        this.myGreeting = DerivedStatic.getGreeting();
    }
}
// Generic Classes
class Box {
    constructor(value) {
        this.contents = value;
    }
}
const box = new Box("hello!");
// 'this' at Runtime in Classes
class MyThisClass {
    constructor() {
        this.name = "MyClass";
    }
    getName() {
        return this.name;
    }
}
const mtc = new MyThisClass();
const objmtc = {
    name: "obj",
    getName: mtc.getName,
};
console.log(objmtc.getName()); // "obj", not "MyClass"
class MyClassWithArrow {
    constructor() {
        this.name = "MyClass";
        this.getName = () => {
            return this.name;
        };
    }
}
const mcwa = new MyClassWithArrow();
const mcwag = mcwa.getName;
console.log(mcwag());
// this Types
class BoxThisTypes {
    constructor() {
        this.contents = "";
    }
    set(value) {
        this.contents = value;
        return this;
    }
}
class ClearableBox extends BoxThisTypes {
    clear() {
        this.contents = "";
    }
}
const a = new ClearableBox();
const a2 = a.set("hello");
class BoxWithSameAs {
    constructor() {
        this.content = "";
    }
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBoxWithSameAs extends BoxWithSameAs {
    constructor() {
        super(...arguments);
        this.otherContent = "?";
    }
}
const derivedBox = new DerivedBoxWithSameAs();
const baseBox = new BoxWithSameAs();
const otherDerivedBox = new DerivedBoxWithSameAs();
// Error!: derivedBox.sameAs(baseBox);
derivedBox.sameAs(otherDerivedBox);
class FileSystemObject {
    constructor(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    isFile() {
        return this instanceof FileRep;
    }
    isDirectory() {
        return this instanceof Directory;
    }
    isNetworked() {
        return this.networked;
    }
    ;
}
class FileRep extends FileSystemObject {
    constructor(path, content) {
        super(path, false);
        this.content = content;
    }
}
class Directory extends FileSystemObject {
}
const fso = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
    fso.content;
}
else if (fso.isDirectory()) {
    fso.children;
}
else if (fso.isNetworked()) {
    fso.host;
}
class BoxThisIs {
    hasValue() {
        return this.value !== undefined;
    }
}
const thisBox = new BoxThisIs();
thisBox.value = "Gameboy";
thisBox.value;
if (thisBox.hasValue()) {
    thisBox.value;
}
// Parameter Properties
class Params {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // No body necessary
    }
}
const param = new Params(1, 2, 3);
console.log(param.x);
// Error! Private only!: console.log(param.z);
// Class Expressions
const someClass = class {
    constructor(value) {
        this.content = value;
    }
};
const sc = new someClass("Hello, world");
// abstract Classes and Members
class AbstractBase {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
// Error!: const ab = new AbstractBase();
class DerivedAbstractClass extends AbstractBase {
    getName() {
        return "world";
    }
}
const dac = new DerivedAbstractClass();
dac.printName();
function greet(ctor) {
    const instance = new ctor();
    instance.printName();
}
greet(DerivedAbstractClass);
// Error!: greet(AbstractBase);
// Relationships Between Classes
class Point1 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Point2 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const p2 = new Point2(); // OK
class Person {
}
class Employee {
}
const emp = new Employee(); // OK
// Error!: const per: Employee = new Person();
class Empty {
}
function fn(x) {
}
//fn(window); // OK
fn({}); // OK
fn(fn); // OK
