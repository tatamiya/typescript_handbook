function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(2, "hoge"));
console.log(padLeft("piyo", "hoge"));

// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll("hoge");
printAll(["hoge", "fuga", "piyo"]);
printAll(null);
printAll([]);
printAll("");
printAll(undefined);

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}
console.log(multiplyAll([0, 2, 5], 8));
console.log(multiplyAll([], 8));
console.log(multiplyAll(null, 8));
console.log(multiplyAll(undefined, 8));

