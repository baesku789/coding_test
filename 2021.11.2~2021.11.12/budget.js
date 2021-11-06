function solution(d, budget) {
    let answer = 0;
    while (budget >= 0) {
        let min = Math.min(...d)
        if (budget < min) {
            break
        }
        budget -= min
        console.log(`budget : ${budget}`)
        let pos = d.indexOf(min)
        d.splice(pos, 1)
        answer += 1
    }
    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9))
