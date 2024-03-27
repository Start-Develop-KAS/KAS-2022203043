// 제한 시간 : 20분
// 푼 시간 : 16m 13s
let [x, y] = require("fs").readFileSync("input.txt").toString().split("");

const px = ["a", "b", "c", "d", "e", "f", "g", "h"];
x = px.findIndex((ele) => ele === x) + 1;
y = parseInt(y);

let cnt = 0;
const notOutOfRange = (x, y) => {
    if (x > 0 && x <= 8 && y > 0 && y <= 8) cnt++;
    else return;
};

notOutOfRange(x + 2, y + 1);
notOutOfRange(x + 2, y - 1);
notOutOfRange(x - 2, y + 1);
notOutOfRange(x - 2, y - 1);
notOutOfRange(x + 1, y + 2);
notOutOfRange(x - 1, y + 2);
notOutOfRange(x + 1, y - 2);
notOutOfRange(x - 1, y - 2);

console.log(cnt);
