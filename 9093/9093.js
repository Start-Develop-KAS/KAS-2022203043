// 2024.02.25 (SUN)

const [num, ...str] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

result = [];

for (let i = 0; i < num; ++i) {
    let arr = str[i].split(" ");
    arr = arr.map((ele) => [...ele].reverse().join(""));
    result.push(arr.join(" "));
}

console.log(result.join("\n"));
