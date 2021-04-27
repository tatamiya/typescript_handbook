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

