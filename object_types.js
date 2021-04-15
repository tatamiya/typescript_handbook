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
