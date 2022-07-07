function findMinor(array: number[]){
  let minor = array[0];
  let minor_index = 0;
  for (const [index, number] of array.entries()) {
    if(number < minor){
      minor = number;
      minor_index = index;
    }
  }

  return minor_index;
}

function selectionOrder(array: number[]){
  const orderedArray: number[] = [];
  const initialLength = array.length;
  for (let i = 0; i < initialLength; i++) {
    const index = findMinor(array);
    orderedArray.push(array.splice(index, 1)[0]);
    console.log(orderedArray)
  }
}

selectionOrder([10, 9, 7,8,3,2,1,4,5,6]);