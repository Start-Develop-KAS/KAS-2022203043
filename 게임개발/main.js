// 첫번째 시도 (실패)
const input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n");

let [mapX, mapY] = input[0].split(" ").map((el) => parseInt(el));
let [x, y, d] = input[1].split(" ").map((el) => parseInt(el));
let result = 0;

// 맵 생성
const Map = [];
for (let i = 0; i < mapX; i++) {
    Map.push(input[2 + i].split(" ").map((el) => parseInt(el)));
}

// dic
// 북 : 0
// 동 : 1
// 남 : 2
// 서 : 3
const dic = [(0, 1), (1, 0), (0, -1), (-1, 0)];

const 돌아 = (d) => {
    // 북 -> 서 -> 남 -> 동 -> 북
    if (d === 0) return 3;
    else return d - 1;
};

const 뒤로돌아 = (d) => {
    d = 돌아(d);
    d = 돌아(d);
    return d;
};

const 가 = (d) => {
    x += dic[d][0];
    y += dic[d][1];
};

const 갈까 = (a, b, d) => {
    a += dic[d][0];
    b += dic[d][1];
    if (Map[a][b] === 0) return true;
    else return false;
};

let turn = 0;
while (true) {
    d = 돌아(d);
    turn++;
    if (갈까(x, y, d)) {
        가(d);
        Map[x][y] = 1;
        result++;
        turn = 0;
    } else {
        if (turn > 4) {
            d = 뒤로돌아(d);
            가(d);
            if (!갈까(x, y, d)) break;
            else {
                turn = 0;
                d = 뒤로돌아(d);
                continue;
            }
        } else {
            continue;
        }
    }
}

console.log(result);
