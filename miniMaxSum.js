function miniMaxSum(arr) {
  let subArr = getAllSubsets(arr);
  let minMax = [];

  for (let i = 0; i < subArr.length; i++) {
    let sum = subArr[i].reduce((partialSum, a) => partialSum + a, 0);
    minMax.push(sum);
  }

  console.log(Math.min(...minMax), Math.max(...minMax));
}

const getAllSubsets = theArray => {
  let arr = theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
    [[]]
  );

  let filterSub = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === theArray.length - 1) {
      filterSub.push(arr[i]);
    }
  }

  return filterSub;
};

miniMaxSum([7, 69, 2, 221, 8974]);
