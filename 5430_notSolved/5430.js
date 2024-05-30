// 다시 풀어보기
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let i, j;
let testArr = [];
let cmds = [];
const testcase = input[0];
for (i = 1; i <= testcase * 3; i += 3) {
    cmds.push(input[i]);
    if (input[i + 2] == "[]") testArr.push([]);
    else testArr.push(input[i + 2].slice(1, -1).split(",").map(Number));
}

let arr, cmd, max, isError;
for (i = 0; i < testcase; ++i) {
    arr = testArr[i];
    cmd = cmds[i];
    max = cmds[i].length;
    isError = false;
    for (j = 0; j < max; ++j) {
        if (cmd[j] == "R" && j + 1 < max) {
            if (cmd[j + 1] == "D") {
                arr.reverse();
            } else {
                j += 1;
            }
        } else {
            if (arr.length == 0) {
                isError = true;
                break;
            } else {
                arr.shift();
            }
        }
    }
    if (isError) {
        console.log("error");
    } else {
        console.log(`[${arr}]`);
    }
}
