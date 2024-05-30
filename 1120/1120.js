const [A, B] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')

let result = 0

function DIFF(b) {
    let res = 0
    for (let i = 0; i < A.length; ++i) if (A[i] != b[i]) res++
    return res
}

if (A.length == B.length) {
    for (let i = 0; i < A.length; ++i) if (A[i] != B[i]) result++
} else {
    let sliceStr = ''
    result = 1000000
    for (let i = 0; i < B.length - A.length + 1; ++i) {
        sliceStr = B.slice(i, A.length + i)
        const res = DIFF(sliceStr)
        if (res < result) result = res
    }
}

console.log(result)
