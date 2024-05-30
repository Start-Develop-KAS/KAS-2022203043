const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let arr = [];
for (let i = 1; i < input.length; i += 2) {
    arr.push(input[i + 1].split(" ").map(Number));
}

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
