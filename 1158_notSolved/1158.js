const [N, K] = require("fs").readFileSync("./1158.txt").toString().split(" ");

console.log(N, K);
const result = ["<"];

const arr = [];
let cursor = 0;
for (let i = 0; i < N; ++i) {
    arr.push(i + 1);
}

while (arr.length !== 0) {
    cursor = (k - 1 + cursor) / arr.length;
}

result.push(">");
console.log(result.join(""));
