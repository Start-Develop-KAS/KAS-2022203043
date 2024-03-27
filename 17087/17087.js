const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, S] = input[0].split(" ");
const children = [...input[1].split(" ")];

const diff = children.map((i) => {
    const num = Number(i);
    return num < S ? S - num : num - S;
});

const sorted = diff.sort((a, b) => b - a);

let isOvered = false;

for (let ele of sorted) {
    const result = sorted.every((e) => e % ele === 0);

    if (result) {
        console.log(ele);
        isOvered = true;
        break;
    }
}

if (isOvered === false) {
    for (let i = sorted[N - 1] - 1; i > 0; --i) {
        const result = sorted.every((e) => e % i === 0);

        if (result) {
            console.log(i);
            break;
        }
    }
}
