const climbingStairs = (n) => {
    let ways = 1; // n은 무조건 1로 나누어 떨어짐.
    if (n % 2 === 0) {
        ways = ways + 1 //짝수라면 2로만 이루어진 방법 존재
        while (n===1) {
            n = n / 2
            ways = ways + 1 //짝수라면 2로만 이루어진 방법 존재
        }
    } else {
        n = n-1 
        while (n===1) {
            n = n / 2
            ways = ways + 1 //짝수라면 2로만 이루어진 방법 존재
        }
    }

    return ways
}

console.log(climbingStairs())