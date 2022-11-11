function repeatStringNumTimes(str, num) {
  let repeated = "";
  for(let i = 0; i < num; i++){
    repeated += str; 
  }
  console.log(repeated);
  return str;
}

repeatStringNumTimes("night", 5);