// 제한시간 : (모름)
// 걸린시간 : 09m 35s
const input = require("fs").readFileSync("./input.txt").toString().split("\n");
console.log(input);

let [R, C] = input[0].split(" ").map((el) => parseInt(el));
let arr = [];
for (let i = 0; i < R; ++i) {
    arr.push(Math.min(...input[i + 1].split(" ").map((el) => parseInt(el))));
}

console.log(Math.max(...arr));
