function binarySearch(list: number[], answer: number){
  let min = 0;
  let max = list.length - 1;
  let tries = 0;

  let guess = 0;
  while (min <= max) {
    guess =  Math.floor((min + max) / 2);
    if(list[guess] === answer){
      tries++;
      break;
    }else if(list[guess] <= answer){
      tries++;
      min = guess + 1;
    }else{
      tries++;
      max = guess - 1;
    }
  }

  console.log("Total tries was " + tries);
  console.log("Answer was " + list[guess]);
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 7);