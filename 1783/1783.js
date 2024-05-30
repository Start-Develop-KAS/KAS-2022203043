// 4/6 (토) 40분 소요
// 해설 참조

let [N, M] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

let pos = {
    x: 1,
    y: 1,
};

function canGo(pos) {
    if (pos.x + 1 <= M && pos.y + 2 <= N) return 1;
    if (pos.x + 2 <= M && pos.y + 1 <= N) return 2;
    if (pos.x + 2 <= M && pos.y - 1 >= 1) return 3;
    if (pos.x + 1 <= M && pos.y - 2 >= 1) return 4;
    return 5;
}

let funcDict = {
    1: (pos) => {
        pos.x += 1;
        pos.y += 2;
    },
    2: (pos) => {
        pos.x += 2;
        pos.y += 1;
    },
    3: (pos) => {
        pos.x += 2;
        pos.y -= 1;
    },
    4: (pos) => {
        pos.x += 1;
        pos.y -= 2;
    },
};

let visit = 1;

if (M <= 7 || N <= 4) {
    while (canGo(pos) != 5) {
        funcDict[canGo(pos)](pos);
        visit += 1;
        if (visit >= 4) break;
    }
} else {
    pos = { x: 7, y: 1 };
    visit += 4;
    while (canGo(pos) != 5) {
        funcDict[canGo(pos)](pos);
        visit += 1;
    }
}

console.log(visit);
