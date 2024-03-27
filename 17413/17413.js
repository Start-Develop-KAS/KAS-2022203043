const [...str] = require("fs").readFileSync("./17413.txt").toString();

let stack = [];
const result = [];

let i = 0;
while (str.length !== 0) {
    if (str[i] === "<") {
        if (stack.length > 0) {
            result.push([...stack].reverse().join(""));
            stack = [];
        }

        while (true) {
            if (str[i] === ">") {
                result.push(str[i]);
                ++i;
                break;
            } else {
                result.push(str[i]);
                ++i;
            }
        }
    } else if (str[i] === " ") {
        result.push([...stack].reverse().join(""));
        stack = [];
        result.push(" ");
        ++i;
    } else {
        stack.push(str[i]);
        ++i;
    }
}

console.log(result.join(""));
