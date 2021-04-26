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
