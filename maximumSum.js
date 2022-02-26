function getSubArrays(arr) {
  let startingNumbers = arr.split("\n")[0].split(" ")[0];
  let array = arr.split("\n")[1].split(" ");

  const subArrays = startingSubArr(startingNumbers, array);

  let arr1 = [];
  subArrays.map(sub => {
    arr1.push(...subArr(sub.length, sub));
  });
  //   const subSubArray = subArr(startingNumbers, subArrays);

  let set = new Set(arr1);
  let sum = 0;
  set.forEach(num => {
    sum += num;
  });

  console.log(sum); // 👉️ 10
}

function subArr(startingNumbers, array) {
  let sub = [];
  let MAX = [];
  for (var i = 0; i < startingNumbers; i++) {
    for (var j = i; j < array.length; j++) {
      sub.push(array.slice(i, j + 1));
    }
  }

  let obj = {};
  let arr = [];
  sub.map(s => {
    // console.log(s);
    let count = 0;
    let max = [];
    s.map(a => {
      count += Number(a);
      max.push(count);
      obj[s] = count;
    });
    arr.push(obj[s]);
  });

  MAX.push(Math.max(...arr));
  //   console.log(MAX);

  return [...MAX];
}

function startingSubArr(startingNumbers, array) {
  let sub = [];
  for (var i = 0; i < startingNumbers; i++) {
    for (var j = i; j < array.length; j++) {
      sub.push(array.slice(i, j + 1));
    }
  }

  return sub;
}

getSubArrays(`100
-2 -38 -35 10 -37 -7 41 -27 15 4 14 -15 -41 34 11 -28 32 43 48 -33 12 -27 1 -4 16 12 -17 -32 -50 -38 2 23 33 -3 17 -17 25 -34 48 43 -45 45 -32 22 -45 -42 -28 31 28 46 22 -26 7 -23 47 20 -23 -8 44 -36 42 -36 -42 36 2 17 45 -19 5 -9 10 -46 44 39 -36 27 -4 2 31 -17 -20 -5 30 -19 -17 -37 8 11 41 -40 -26 7 -31 27 -49 -44 -31 -35 -24 45`);
