// 4. Recursive Reverse String

function reverseString(string) {
  if (string === "") {
    return string;
  } else {
    return reverseString(string.substr(1)) + string[0];
  }
}

// Example outputs:
console.log(reverseString("abcb")); // bcba
console.log(reverseString("test")); // tset
console.log(reverseString("racecar")); // racecar
