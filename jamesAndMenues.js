function calculate(data) {
  let obj = {};
  let startingNumbers = data.split("\n")[0].split(" ");
  let numberOfMenus = startingNumbers[0];
  let numberOfItems = startingNumbers[1];

  let menuns = data.split(`\n`).slice(1);
  let formattedMenues = [];
  for (let i = 0; i < menuns.length; i++) {
    formattedMenues.push(menuns[i].split(" "));
  }

  for (let i = 0; i < numberOfItems; i++) {
    let arr2 = [];
    for (let j = 0; j < formattedMenues.length; j++) {
      if (arr2.length < numberOfMenus) {
        if (Number(formattedMenues[j][i])) {
          arr2.push(Number(formattedMenues[j][i]));
        }
      } else {
        if (Number(formattedMenues[j][i])) {
          arr2.push(...arr2, Number(formattedMenues[j][i]));
        }
      }
    }

    if (arr2.length > 0) {
      let maxIndexes = arrayAllMaxIndexes(arr2);

      maxIndexes.map(i => {
        if (obj[formattedMenues[i]]) {
          obj[formattedMenues[i]] = obj[formattedMenues[i]] + 1;
        } else {
          obj[formattedMenues[i]] = 1;
        }
      });
    }
  }

  let menuesIndexes = objIndex(Object.values(obj), Object.keys(obj));

  Array.prototype.indexOfForArrays = function (search) {
    var searchJson = JSON.stringify(search); // "[0,1]"
    var arrJson = this.map(JSON.stringify); // ["[3,4]", "[0,1]", "[1,0]"]

    return arrJson.indexOf(searchJson) + 1;
  };

  if (menuesIndexes.length === 1) {
    console.log(formattedMenues.indexOfForArrays(menuesIndexes[0]));
    return formattedMenues.indexOfForArrays(menuesIndexes[0]);
  }

  let finalObj = {};

  for (let i = 0; i < menuesIndexes.length; i++) {
    let count = 0;
    let average = 0;
    for (let j = 0; j < menuesIndexes[i].length; j++) {
      count += Number(menuesIndexes[i][j]);
      average = count / menuesIndexes[i].length;
    }

    finalObj[menuesIndexes[i]] = average;
  }

  let bestMenu = maxObjIndex(Object.values(finalObj), Object.keys(finalObj));
  console.log(formattedMenues.indexOfForArrays(bestMenu[0]));
}

// 236437595 881290520 583939123 154226826 614788012 838110455 455382451 71101659

function getValueFromIndexesPlusOne(arr, val, obj) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  let inds = indexes.map(i => {
    return obj[i].split(",");
  });

  return inds;
}

function getValueFromIndexes(arr, val, obj) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  let inds = indexes.map(i => {
    return obj[i].split(",");
  });

  return inds;
}

var maxObjIndex = function (array, obj) {
  return getValueFromIndexesPlusOne(array, Math.max.apply(null, array), obj);
};

var minObjIndex = function (array, obj) {
  return getValueFromIndexes(array, Math.min.apply(null, array), obj);
};

var objIndex = function (array, obj) {
  return getValueFromIndexes(array, Math.max.apply(null, array), obj);
};

function getAllIndexes(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }

  return indexes;
}

var arrayAllMaxIndexes = function (array) {
  return getAllIndexes(array, Math.max.apply(null, array));
};

calculate(`3 4
1 2 1 10
3 2 3 4
1 3 3 2`);
