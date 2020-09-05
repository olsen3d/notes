/* eslint-disable eol-last */
/* eslint-disable quotes */



function solution(array) {
    let missing = 0, duplicate = 0;
    let counter = {}
    array.forEach( int => {
        if(counter[int] === 1) {
            missing = int + 1
            duplicate = int
        }
        else counter[int] = 1
    })
    return [missing, duplicate];
  }
  



console.log(solution([2,3,1,4,4,6]))