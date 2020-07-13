// 1. Longest Sequence

function longestSequence(sequence) {
  let matches = sequence.match(/([a-z])\1+/gi);

  let longestSortedMatch = matches
    .sort()
    .reduce((a, b) => (b.length > a.length ? b : a));

  return { [longestSortedMatch[0].toLowerCase()]: longestSortedMatch.length };
}

// Example outputs:
console.log(longestSequence("dghhhmhmx")); // {h: 3}
console.log(longestSequence("dhkkhhKKKt")); // {k: 3}
console.log(longestSequence("aBbBadddadd")); // {b: 3}

// An example output that demonstrates the need to sort the matches array
console.log("my example output: ", longestSequence("dddbbbrrr")); // {b: 3}
