const input = [...require("fs").readFileSync("./1373.txt").toString()];
let cursor = input.length % 3;
ans = "";
if (cursor !== 0) {
    ans = parseInt(input.slice(0, cursor).join(""), 2).toString(8) + ans;
    for (let i = 1; i < input.length / 3; ++i) {
        ans =
            parseInt(input.slice(cursor, cursor + 3).join(""), 2).toString(8) +
            ans;
        cursor += 3;
    }
} else {
    for (let i = 0; i < input.length / 3; ++i) {
        ans =
            parseInt(input.slice(cursor, cursor + 3).join(""), 2).toString(8) +
            ans;
        cursor += 3;
    }
}

console.log(ans);
