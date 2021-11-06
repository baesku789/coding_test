// 가장 좋았던 다른 사람의 풀이
function solution(d, budget) {
    let money = 0;
    let answer = 0;
    d.sort((a,b) => a-b).forEach(val => {
        money += val
        if (money <= budget) {
            answer++ 
        }
    });
    return answer
}

console.log(solution([1, 3, 2, 5, 4], 9))
