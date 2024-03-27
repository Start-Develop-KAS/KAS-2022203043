const solution = (prices) => {
    let copyArr = [...prices];
    return prices.map((ele) => {
        copyArr.shift();
        let cnt = 0;
        for (let e of copyArr) {
            ++cnt;
            if (ele > e) break;
        }
        return cnt;
    });
};

console.log(solution([1, 2, 3, 2, 3]));
