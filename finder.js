function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if(func(num)) {
      console.log(num);
      return num;
    }
  }
  console.log(undefined);
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);