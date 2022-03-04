const howSum = (targetSum, elements, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of elements) {
    let remainder = targetSum - num;
    let remainderResult = howSum(remainder, elements, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;

  return null;
};

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(300, [7, 14]));
