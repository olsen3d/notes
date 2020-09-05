
function solution(str) {
    const regex = /[A-Z]/
    return str.split(regex)
}


console.log(solution("camelCasingTest"))