sampleArray1 = [1, 2, 3, 4];
sampleArray2 = [-3, 5, 19, -6];

function sum(inputArray) {
  let arraySum = 0;

  for (i = 0; i < inputArray.length; i++) {
    arraySum = arraySum + inputArray[i];
  }

  return arraySum;
}

console.log(sum(sampleArray1));
console.log(sum(sampleArray2));
