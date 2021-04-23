var person = makeWatchedObject({
    firstName: "Saoirese",
    lastName: "Ronan",
    age: 26
});
person.on("firstNameChanged", function (newName) {
    console.log("new name is " + newName.toUpperCase());
});
person.on("ageChanged", function (newAge) {
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
});
person.on("firstNameChanged", function () { });
