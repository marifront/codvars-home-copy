function solution(str){
  let result = '';
  for(let elem of str) {
    result =  elem + result;
  }
//   return result
  console.log(result);
}

solution('TypeScript')