// Property Modifiers
interface SomeType {
    readonly prop: string;
}
function doSomething(obj: SomeType) {
    console.log(`prop has the value '${obj.prop}'.`);

    // Error!: obj.prop = "hello";
}

interface Home {
    readonly resident: { name: string; age: number };
}
function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}!`);
}
// function evict(home: Home) {
//     home.resident = {
//         name: "Victor the Evictor",
//         age: 42,
//     };
// }
interface Person {
    name: string;
    age: number;
}
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
}
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);

// Extending Types
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
    unit: string;
}
// interface AddressWithUnit {
//     name?: string;
//     street: string;
//     unit: string;
//     city: string;
//     country: string;
//     postalCode: string;
// }
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
interface ColorfulCircle extends Colorful, Circle { }
const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};
// Intersection Types
type ColorfulCircle2 = Colorful & Circle;
function draw(circle: ColorfulCircle2) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
draw({ color: "blue", radius: 42 });
// Error!: draw({ color: "blue", raidus: 42 });

// Generic Object Types
interface UnknownBox {
    contents: unknown;
}
let x: UnknownBox = {
    contents: "hello world",
}
if (typeof x.contents === "string") {
    console.log(x.contents.toLocaleLowerCase());
}
console.log((x.contents as string).toLocaleLowerCase());

interface Box<Type> {
    contents: Type;
}
interface StringBox {
    contents: string;
}
let boxA: Box<string> = { contents: "hello" };
console.log(boxA.contents);
let boxB: StringBox = { contents: "world" };
console.log(boxB.contents);

function doStuff(values: ReadonlyArray<string>) {
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // Error!: values.push("hello!");
}
doStuff(["hoge", "fuga", "piyo"]);

const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
// Impossible: new ReadonlyArray("red", "green", "blue");

let x0: readonly string[] = [];
let y0: string[] = [];
x0 = y0;
// not asiginable!: y0 = x0;

type StringNumberPair = [string, number];
function doSomethingWithTuple(pair: StringNumberPair) {
    const a = pair[0];
    const b = pair[1];
    // Error!: const c = pair[2];
    console.log(a, b);
}
doSomethingWithTuple(["hello", 42]);
// doSomethingWithTuple([4, 5]);
// doSomethingWithTuple(["hello", 42, 0]);

type Either2dOr3d = [number, number, number?];
function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;
    console.log(`Provided coordinates had ${coord.length} dimensions.`);
}
// setCoordinate([1]);
setCoordinate([1, 2]);
setCoordinate([1, 2, 3]);
// setCoordinate([1, 2, 3, 4]);

type StringBooleansNumber = [string, ...boolean[], number];
const abn0: StringBooleansNumber = ["hello", 0];
const abn1: StringBooleansNumber = ["hello", false, 0];
const abn2: StringBooleansNumber = ["hello", true, true, false, 0];
// const abn3: StringBooleansNumber = ["hello", true, "hoge"];
// const abn4: StringBooleansNumber = ["hello", "hoge", true, 0];
// const abn5: StringBooleansNumber = ["hello", true];

function distanceFromOrigin(coord: readonly [number, number]) {
    //let x = coord[0];
    //let y = coord[1];
    let [x, y] = coord;
    // Error!: coord[0] = 100;
    return Math.sqrt(x ** 2 + y ** 2);
}
console.log(distanceFromOrigin([0, 3]));

function distanceFromOrigin2([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
let point = [3, 4] as const; // readonly
console.log(distanceFromOrigin(point));
// Error! Not assignable!: distanceFromOrigin2(point);