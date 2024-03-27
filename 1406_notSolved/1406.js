// 링크드리스트로 개발하면 됨

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [string, num, ...cmds] = input;
const str = [...string];
let cursor = str.length;
let x = 0;

for (let i = 0; i < num; ++i) {
    switch (cmds[i][0]) {
        case "L":
            cursor === 0 ? null : --cursor;
            break;
        case "D":
            cursor === str.length ? null : ++cursor;
            break;
        case "B":
            if (!(cursor === 0)) {
                str.splice(cursor - 1, 1).toString();
                cursor === 0 ? null : --cursor;
            }
            break;
        case "P":
            x = cmds[i][2];
            if (cursor === 0) {
                str.unshift(x);
            } else {
                str.splice(cursor, 0, x).toString();
                cursor === str.length ? null : ++cursor;
            }
            break;
    }
}

console.log(str.join(""));
