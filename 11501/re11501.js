const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const que = []

for (let i = 2; i < input.length; i += 2) {
    que.push(input[i].split(' ').reverse().map(Number))
}

// START
let result = []
for (let arr of que) {
    let cri = arr[0]
    let res = 0
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > cri) {
            // 아무것도 사지 않는다.
            cri = arr[i]
        } else {
            // 주식이 오른다 -> 산다
            res += cri - arr[i]
        }
    }
    result.push(res)
}

console.log(result.join('\n'))
