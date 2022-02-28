function arrayManipulation(sizeOfArr, queries) {
  // 1st Approach
  //   let arr1 = new Array(sizeOfArr).fill(0);
  //   for (let i = 0; i < queries.length; i++) {
  //     let startIndex = queries[i][0];
  //     let endIndex = queries[i][1];
  //     let numberToAdd = queries[i][2];

  //     for (let j = 0; j < sizeOfArr; j++) {
  //       let index = j + 1;
  //       if (index >= startIndex && index <= endIndex) {
  //         arr1[j] += numberToAdd;
  //         console.log(arr1[j]);
  //       }
  //     }
  //   }

  //   return Math.max(...arr1);

  // 2nd Approach

  const arr = Array(sizeOfArr);
  let maxValue = 0,
    currentNumber = 0;
  queries.forEach(([startRange, endRange, value]) => {
    arr[startRange] = arr[startRange] || { start: 0, end: 0 };
    arr[endRange] = arr[endRange] || { start: 0, end: 0 };
    arr[startRange].start += value;
    arr[endRange].end += value;
  });

  console.log(arr);
  arr.forEach((cell, i) => {
    if (cell) {
      currentNumber += cell.start;
      if (currentNumber > maxValue) {
        maxValue = currentNumber;
      }
      currentNumber -= cell.end;
    }
  });
  return maxValue;
}

const a = arrayManipulation(5, [
  [1, 2, 100],
  //   [2, 5, 100],
  //   [3, 4, 100],
]);

console.log(a);
