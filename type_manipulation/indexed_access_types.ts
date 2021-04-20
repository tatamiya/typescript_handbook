type Person1 = { age: number; name: string, alive: boolean };
type Age = Person1["age"];
type I1 = Person1["age" | "name"];
type I2 = Person1[keyof Person1];
type AliveOrName = "alive" | "name";
type I3 = Person1[AliveOrName];
// Error!: type Ix = Person1["hoge"]

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
type Person2 = typeof MyArray[number];
type Age2 = typeof MyArray[number]["age"];
type Age3 = Person2["age"];

// Error! Treated as Any: const key = "age";
type key = "age";
type Age4 = Person2[key];