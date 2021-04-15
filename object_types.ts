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
