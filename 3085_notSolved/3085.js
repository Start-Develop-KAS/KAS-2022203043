// 4월 6일 (토)
// 걸린시간: 20분 | 실패
// 빨간색 -> C
// 파란색 -> P
// 초록색 -> Z
// 노란색 -> Y

let input = require("fs").readFileSync("./input.txt").toString().split("\n");

let map = [];
let cnt = input[0]
for (let i = 1; i <= cnt; ++i) {
    map.push(input[i].split(""));
}

let max = 0;
let isOver = false;
let temp;

// 연속하는 것 검사
// ROW 검사 
for (let i = 0; i < cnt; ++i) {
    temp = 0;
    for (let j = 0; j < cnt; ++j) {
        if (map[i][j])
    }
}

// COL 검사
for (let i = 0; i < cnt; ++i) {

}
