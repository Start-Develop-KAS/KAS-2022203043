// 2024.03.31
// 걸린시간: 40m
const input = require("fs").readFileSync("/dev/stdin").toString();

let arr = [];
let re = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === "+") {
        arr.push(parseInt(re));
        arr.push("+");
        re = "";
    } else if (input[i] === "-") {
        arr.push(parseInt(re));
        arr.push("-");
        re = "";
    } else {
        re += input[i];
    }
}
if (re.length > 0) {
    arr.push(parseInt(re));
}

let result = 0;
let isMinus = false;

let i;
// find minus
for (i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
        isMinus = true;
        break;
    } else if (!isNaN(arr[i])) {
        result += arr[i];
    }
}

for (let j = i + 1; j < arr.length; j++) {
    if (!isNaN(arr[j])) {
        result -= arr[j];
    }
}
console.log(result);
