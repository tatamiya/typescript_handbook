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
