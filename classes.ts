class Point {
    x: number;
    y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(`${pt.x}, ${pt.y}`);
// Error!: pt.x = "0";

class PointWithInitialization {
    x = 0;
    y = 0;
}
const ptWithInit = new PointWithInitialization();
// Type Error!: ptWithInit.x = "0";

class Greeter {
    readonly name: string = "world";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    // Error!
    //    err() {
    //        this.name = "not ok";
    //    }
}
const greeter = new Greeter();
// Error!: greeter.name = "also not ok";

class PointWithConstructor {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class PointWithMethod {
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}

class CWithGetterAndSetter {
    _length = 0;
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
    [s: string]: boolean | ((s: string) => boolean);
    check(s: string) {
        return this[s] as boolean
    }
}

// Class Heritage
interface Pingable {
    ping(): void;
}
class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}
// class Ball implements Pingable {
//     pong() {
//         console.log("pong!");
//     }
// }
interface Checkable {
    check(name: string): boolean;
}
class NameChecker implements Checkable {
    // there should be type annotation for s.
    // otherwise, s is implicitly regarded as 'any'
    check(s: string) {
        return s.toLowerCase() === "ok";
    }
}

interface AWithOptional {
    x: number;
    y?: number;
}
class CWithoutY implements AWithOptional {
    x = 0;
}
const c = new CWithoutY();
// Error!: c.y = 10;

class AnimalToExtend {
    move() {
        console.log("Moving along!");
    }
}
class DogExtended extends AnimalToExtend {
    woof(times: number) {
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
    greet(name?: string) {
        if (name === undefined) {
            super.greet();
        } else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("reader");
const b: BaseForOverride = d; // No problem
b.greet

class BaseForInitializationOrder {
    name = "base";
    constructor() {
        console.log("My name is " + this.name);
    }
}
class DerivedInitializationOrder extends BaseForInitializationOrder {
    name = "derived";
}
const dInitializationOrder = new DerivedInitializationOrder(); // "base"

// Member Visibility
class VisibilityGreeter {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    protected getName() {
        return "hi";
    }
}
class SpecialGreeter extends VisibilityGreeter {
    public howdy() {
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet();
// Not allowed: g.getName();

class BaseProtected {
    protected m = 10;
}
class DerivedProtected extends BaseProtected {
    m = 15; // default is public
}
const dp = new DerivedProtected();
console.log(dp.m);

class BaseCrossHierarchy {
    protected x: number = 1;
}
class Derived1 extends BaseCrossHierarchy {
    protected x: number = 5;
}
class Derived2 extends BaseCrossHierarchy {
    f1(other: Derived2) {
        other.x = 10;
    }
    // Not allowed!
    //    f2(other: BaseCrossHierarchy) {
    //        other.x = 10;
    //    }
}
class BasePrivate {
    private x = 0;
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
    private x = 10;
    public sameAs(other: ACross) {
        // No error
        return other.x === this.x;

    }
}

// Static Members
class MyClassWithStaticMembers {
    static x = 0;
    static printX() {
        console.log(MyClassWithStaticMembers.x);
    }
}
console.log(MyClassWithStaticMembers.x);
MyClassWithStaticMembers.printX();

class MyClassWithStaticPrivate {
    private static x = 0;
}
// Not allowed!: console.log(MyClassWithStaticPrivate.x);

class BaseStatic {
    static getGreeting() {
        return "Hello world";
    }
}
class DerivedStatic extends BaseStatic {
    myGreeting = DerivedStatic.getGreeting();
}

// Generic Classes
class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}
const box = new Box("hello!");

// 'this' at Runtime in Classes
class MyThisClass {
    name = "MyClass";
    getName() {
        return this.name;
    }
}
const mtc = new MyThisClass();
const objmtc = {
    name: "obj",
    getName: mtc.getName,
}
console.log(objmtc.getName()); // "obj", not "MyClass"

class MyClassWithArrow {
    name = "MyClass";
    getName = () => {
        return this.name;
    }
}
const mcwa = new MyClassWithArrow();
const mcwag = mcwa.getName;
console.log(mcwag());


