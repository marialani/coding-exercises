// 2. Second Lowest Frequency

function secondLowest(numsArray) {
  let myHash = {};

  numsArray.map((val) =>
    myHash[val] ? (myHash[val] += 1) : (myHash[val] = 1)
  );

  let sortedHash = Object.entries(myHash).sort((a, b) => a[1] - b[1]);

  let lowestFreq = sortedHash[0][1];
  let secondLowestFreq;

  for (let i = 0; i < sortedHash.length; i++) {
    if (sortedHash[0][1] == sortedHash[sortedHash.length - 1][1]) {
      return Object.keys(myHash).sort((a, b) => a - b)[1];
    }
    if (sortedHash[i][1] > lowestFreq) {
      if (sortedHash[i + 1] && sortedHash[i + 1][1] == sortedHash[i][1]) {
        return (secondLowestFreq = sortedHash[i + 1][0]);
      } else {
        return (secondLowestFreq = sortedHash[i][0]);
      }
    }
    continue;
  }
}

// Example outputs:
console.log(secondLowest([4, 3, 1, 1, 2])); // 1
console.log(secondLowest([4, 3, 1, 1, 2, 2])); // 2
console.log(secondLowest([4, 3, 1, 2])); // 2
