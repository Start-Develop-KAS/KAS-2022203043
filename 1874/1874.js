// 2024.02.25 (SUN)

const [num, ...seq] = require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .split("\n");

const result = [];

let count = 1;
const stack = [];
let isEnd = false;

let ele = "";
for (let i = 0; i < num; ++i) {
    ele = seq[i];
    while (1) {
        if (ele > count) {
            stack.push(count);
            result.push("+");
            count++;
        } else if (ele == count) {
            result.push("+");
            result.push("-");
            count++;
            break;
        } else {
            result.push("-");
            let popped = stack.pop();
            if (popped != ele) isEnd = true;
            break;
        }
    }

    if (isEnd) {
        break;
    }
}

if (isEnd) console.log("NO");
else console.log(result.join("\n"));
