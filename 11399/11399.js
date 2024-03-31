// 2024.03.30
// 걸린시간: 9m
const [_, peopleStr] = require("fs")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n");

const people = peopleStr.split(" ").map((el) => parseInt(el));
people.sort((a, b) => a - b);

let total = 0;

people.forEach((_, idx) => {
    for (let i = 0; i <= idx; ++i) {
        total += people[i];
    }
});

console.log(total);
