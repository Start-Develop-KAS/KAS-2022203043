// 제한시간 : 없음
// 걸린시간 : 5m 5s

// feadback : 한 번에 뺄 수 있는건 바로 뺴자
let [N, K] = require("fs").readFileSync("input.txt").toString().split(" ");

let cnt = 0;
while (true) {
    if (N === 1) break;
    if (N % K === 0) {
        N /= K;
    } else {
        N -= 1;
    }
    cnt++;
}

console.log(cnt);
