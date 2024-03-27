# 백준에서 node.js 입출력 방법

## fs 모듈 이용 (제출용)

### 한 줄로 입력을 받을 때

```javascript
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
```

### 여러 줄로 입력을 받을 때

```javascript
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
```

## fs 모듈 이용 (vscode)

1. vscode에서 "npm install fs"로 파일시스템을 설치
2. txt에 예제를 입력
3. readFileSync의 경로를 txt 위치로 변경
