interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
    id: number;
}
interface NameLabel {
    name: string;
}
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}
let a = createLabel("typescript");
let b = createLabel(2.8);
let c = createLabel(Math.random() ? "hello" : 42);

//type MessageOf<T> = T["message"];
type MessageOf<T extends { message: unknown }> = T["message"];
interface Email {
    message: string;
}
type EmailMessageContents = MessageOf<Email>
// Error!: type DogMessageContents = MessageOf<Dog>;
type MessageOf2<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
    message: string;
}
type EmailMessageContents2 = MessageOf2<Email>
type DogMessageContents2 = MessageOf2<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T;
type Str = Flatten<string[]>;
type Num = Flatten<number>;

type FlattenInfer<Type> = Type extends Array<infer Item> ? Item : Type;
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
type NumInfer = GetReturnType<() => number>;
type StrInfer = GetReturnType<(x: string) => string>;

declare function stringOrNum(x: string | number): string | number;
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
type T1 = ReturnType<typeof stringOrNum>; // string