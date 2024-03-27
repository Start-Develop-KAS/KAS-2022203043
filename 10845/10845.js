const [N, ...cmds] = require("fs")
    .readFileSync("/Users/teng/Desktop/FE/bj/10845/10845.txt")
    .toString()
    .split("\n");

const result = [];

class Queue {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    pushQ(x) {
        this.arr.push(x);
        this.size++;
    }

    popQ() {
        if (this.isEmpty()) {
            result.push("-1");
        } else {
            let x = this.arr.shift();
            result.push(x);
            this.size--;
        }
    }

    isEmpty() {
        return this.size == 0 ? true : false;
    }

    sizeQ() {
        result.push(this.size.toString());
    }

    frontQ() {
        if (this.isEmpty()) {
            result.push("-1");
        } else {
            result.push(this.arr[0]);
        }
    }

    backQ() {
        if (this.isEmpty()) {
            result.push("-1");
        } else {
            result.push(this.arr[this.size - 1]);
        }
    }

    emptyQ() {
        this.isEmpty() ? result.push("1") : result.push("0");
    }
}

const queue = new Queue();

for (let i = 0; i < N; ++i) {
    let [cmd, x] = cmds[i].split(" ");
    switch (cmd) {
        case "push":
            queue.pushQ(x);
            break;

        case "pop":
            queue.popQ();
            break;

        case "size":
            queue.sizeQ();
            break;

        case "front":
            queue.frontQ();
            break;

        case "back":
            queue.backQ();
            break;

        case "empty":
            queue.emptyQ();

        default:
            break;
    }
}

console.log(result.join("\n"));
