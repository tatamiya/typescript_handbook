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
