const [data, ...map] = require('fs')
    .readFileSync('./1189.txt')
    .toString()
    .split('\n')

const [R, C, K] = data.split(' ').map(Number)

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

let answer = 0
function dfs(x, y, distance) {
    if (distance == K) {
        if (x === 0 && y === C - 1) answer++
        return
    }

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (nx >= 0 && nx < R && ny >= 0 && ny < C && map[nx][ny] == '.') {
            map[nx][ny] = 'T' // 다음 위치를 방문 처리
            dfs(nx, ny, distance + 1)
            map[nx][ny] = '.' // 백트래킹, 탐색 끝난 후 원상 복귀
        }
    }
}

map[R - 1][0] = 'T' // 시작 위치를 방문 처리
dfs(R - 1, 0, 1) // 시작 위치에서 탐색 시작
console.log(answer) // 결과 출력
