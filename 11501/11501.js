const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let arr = [];
for (let i = 1; i < input.length; i += 2) {
    arr.push(input[i + 1].split(" ").map(Number));
}

// 1. 다음날이 떨어지고, 주식이 있다면 판다
// 2. 다음날이 떨어지고, 주식이 없다면 다음날로 넘어간다
// 3. 다음날이 그대로면, 주식을 산다
// 4. 다음날이 오르면, 주식을 산다

let profit;
let myProfits = [];
for (let i = 0; i < arr.length; ++i) {
    profit = 0;
    let cur = arr[i][arr[i].length - 1];
    for (let j = arr[i].length - 2; j >= 0; --j) {
        if (cur > arr[i][j]) {
            profit += cur - arr[i][j];
        } else {
            cur = arr[i][j];
        }
    }
    myProfits.push(profit);
}

console.log(myProfits.join("\n"));
