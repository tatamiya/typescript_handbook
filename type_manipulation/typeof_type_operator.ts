console.log(typeof "Hello world");
let s = "hello";
let n: typeof s;
n = "fuga";
// n = 2;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
function f() {
    return { x: 10, y: 3 };
}
// type P = ReturnType<f>;
type PP = ReturnType<typeof f>;