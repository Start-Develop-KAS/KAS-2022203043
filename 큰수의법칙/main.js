// 제한시간 : 30분
// 실제 풀린 시간 : 32m 51s
const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const [cmd, str] = input;
const [_, M, K] = cmd.split(" ").map((el) => parseInt(el));
const [...args] = str.split(" ").map((el) => parseInt(el));

args.sort((a, b) => b - a);
let [fir, sec] = [args[0], args[1]];
let total = 0;

console.log(fir, sec, M, K);
total = (fir * K + sec) * parseInt(M / (K + 1)) + fir * parseInt(M % (K + 1));

console.log(total);
