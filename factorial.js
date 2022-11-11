function factorialize(num) {
  answer = 1;
  for(let i = num; i > 0; i--){
    answer = i * answer ;
  }
  console.log(answer);
  return answer;
}

factorialize(4);