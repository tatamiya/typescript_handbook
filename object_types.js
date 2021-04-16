function doSomething(obj) {
    console.log("prop has the value '" + obj.prop + "'.");
    // Error!: obj.prop = "hello";
}
function visitForBirthday(home) {
    console.log("Happy birthday " + home.resident.name + "!");
}
var writablePerson = {
    name: "Person McPersonface",
    age: 42
};
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
var cc = {
    color: "red",
    radius: 42
};
function draw(circle) {
    console.log("Color was " + circle.color);
    console.log("Radius was " + circle.radius);
}
draw({ color: "blue", radius: 42 });
var x = {
    contents: "hello world"
};
if (typeof x.contents === "string") {
    console.log(x.contents.toLocaleLowerCase());
}
console.log(x.contents.toLocaleLowerCase());
var boxA = { contents: "hello" };
console.log(boxA.contents);
var boxB = { contents: "world" };
console.log(boxB.contents);
function doStuff(values) {
    var copy = values.slice();
    console.log("The first value is " + values[0]);
    // Error!: values.push("hello!");
}
doStuff(["hoge", "fuga", "piyo"]);
var roArray = ["red", "green", "blue"];
// Impossible: new ReadonlyArray("red", "green", "blue");
var x0 = [];
var y0 = [];
x0 = y0;
function doSomethingWithTuple(pair) {
    var a = pair[0];
    var b = pair[1];
    // Error!: const c = pair[2];
    console.log(a, b);
}
doSomethingWithTuple(["hello", 42]);
function setCoordinate(coord) {
    var x = coord[0], y = coord[1], z = coord[2];
    console.log("Provided coordinates had " + coord.length + " dimensions.");
}
// setCoordinate([1]);
setCoordinate([1, 2]);
setCoordinate([1, 2, 3]);
var abn0 = ["hello", 0];
var abn1 = ["hello", false, 0];
var abn2 = ["hello", true, true, false, 0];
// const abn3: StringBooleansNumber = ["hello", true, "hoge"];
// const abn4: StringBooleansNumber = ["hello", "hoge", true, 0];
// const abn5: StringBooleansNumber = ["hello", true];
function distanceFromOrigin(coord) {
    //let x = coord[0];
    //let y = coord[1];
    var x = coord[0], y = coord[1];
    // Error!: coord[0] = 100;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
console.log(distanceFromOrigin([0, 3]));
function distanceFromOrigin2(_a) {
    var x = _a[0], y = _a[1];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
var point = [3, 4]; // readonly
console.log(distanceFromOrigin(point));
// Error! Not assignable!: distanceFromOrigin2(point);
