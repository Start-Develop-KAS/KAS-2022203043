const input = require("fs").readFileSync("./9613.txt").toString().split("\n");
const [N, ...array] = input;

const GCD = (a, b) => {
    return a % b ? GCD(b, a % b) : b;
};

const result = [];
for (let A of array) {
    const [M, ...str] = A.split(" ");
    const arr = str.map((i) => Number(i)).sort((a, b) => b - a);

    let total = 0;
    for (let i = 0; i < M; ++i) {
        for (let j = i + 1; j < M; ++j) {
            total += GCD(arr[i], arr[j]);
        }
    }
    result.push(total);
}

console.log(result.join("\n"));
