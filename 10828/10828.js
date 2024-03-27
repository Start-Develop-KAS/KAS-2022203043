// 2024.02.25 (SUN)

const result = [];

class Stack {
    constructor() {
        this.array = [];
        this.size = 0;
        this.top = undefined;
    }

    push(x) {
        this.array.push(x);
        this.size++;
        this.top = x;
    }

    pop() {
        if (this.isEmpty()) {
            result.push("-1");
        } else {
            let ele = this.array.pop();
            result.push(ele.toString());
            this.size--;
            this.top = this.array[this.array.length - 1];
        }
    }

    fsize() {
        result.push(this.size.toString());
    }

    isEmpty() {
        return this.size ? false : true;
    }

    empty() {
        this.isEmpty() ? result.push("1") : result.push("0");
    }

    ftop() {
        this.isEmpty() ? result.push("-1") : result.push(this.top.toString());
    }
}

let [num, ...cmds] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

const stack = new Stack();

for (let i = 0; i < num; ++i) {
    [c, x] = cmds[i].split(" ");
    switch (c) {
        case "push":
            stack.push(x);
            break;
        case "pop":
            stack.pop();
            break;
        case "size":
            stack.fsize();
            break;
        case "empty":
            stack.empty();
            break;
        case "top":
            stack.ftop();
            break;
        default:
            console.log("switch error !");
    }
}

console.log(result.join("\n"));
