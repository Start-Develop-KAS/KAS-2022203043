let [N, ...input] = require('fs')
    .readFileSync('./input.txt')
    .toString()
    .split('\n')
N = Number(N)

const map = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => ({
        ROW: { MAX: 0, C: 0, P: 0, Z: 0, Y: 0 },
        COL: { MAX: 0, C: 0, P: 0, Z: 0, Y: 0 },
    }))
)

let TMAX = 0

for (let i = 0; i < N; ++i) {
    const row = input[i]
    let [c, p, z, y] = [0, 0, 0, 0]
    let array = Array.from(row)
    array.forEach((ele) => {
        if (ele == 'C') c++
        else if (ele == 'P') p++
        else if (ele == 'Z') z++
        else if (ele == 'y') y++
    })
    const max = Math.max(c, p, z, y)
    if (TMAX < max) TMAX = max

    for (let j = 0; j < N; ++j)
        map[i][j].ROW = { MAX: max, C: c, P: p, Z: z, Y: y }
}

for (let j = 0; j < N; ++j) {
    let [c, p, z, y] = [0, 0, 0, 0]
    for (let i = 0; i < N; ++i) {
        if (input[i][j] == 'C') c++
        else if (input[i][j] == 'P') p++
        else if (input[i][j] == 'Z') z++
        else if (input[i][j] == 'Y') y++
    }
    const max = Math.max(c, p, z, y)
    if (TMAX < max) TMAX = max

    for (let i = 0; i < N; ++i)
        map[i][j].COL = { MAX: max, C: c, P: p, Z: z, Y: y }
}

console.log(TMAX)
for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
        console.log(input[i][j], map[i][j])
    }
}
