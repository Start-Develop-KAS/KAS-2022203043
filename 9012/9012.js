// 2024.02.25 (SUN)

let [num, ...str] = require("fs")
    .readFileSync("./9012.txt")
    .toString()
    .split("\n");

const result = [];

const isVPS = (string) => {
    const stack = [];
    const s = [...string];
    for (let ele of s) {
        switch (ele) {
            case "(":
                stack.push(ele);
                break;
            case ")":
                if (stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return "NO";
                }
                break;
            default:
                console.log("switch error!");
        }
    }

    if (stack.length !== 0) return "NO";

    return "YES";
};

for (let i = 0; i < num; ++i) {
    result.push(isVPS(str[i]));
}

console.log(result.join("\n"));
