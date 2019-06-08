/**
 @function 
 @name reverseString
 @param 

 */
var reverseStr = "hello";
function reverseString(str) {
  let tempArray = [];
  for (let i = 0; i < str.length; i++) {
    tempArray.push(str.charAt(i));
  }
  tempArray.reverse();
  return tempArray.join("");
}

// console.log(reverseString(reverseStr));

var palStr = "racecar";
function isPalindrom(str) {
  revStr = str.split("").join("");

  if (revStr === str) {
    return "this is a palindrom string ";
  } else {
    return "this is NOT a palindrom string ";
  }
}
// console.log(isPalindrom(palStr));
function reverseInt(num) {
  num = num
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(num);
}
// output = reverseInt(123);
// console.log(output);
function capitalizeLetters(str) {
  //   strArr = str.split(" ");
  //   tempArray = [];
  //   for (i = 0; i < strArr.length; i++) {
  //     tempArray.push(
  //       strArr[i].replace(strArr[i].charAt(0), strArr[i].charAt(0).toUpperCase())
  //     );
  //   }
  strArr = str.toLowerCase().split(" ");
  for (i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}
// const output = capitalizeLetters("i love java script");
// console.log(output);

// Longest word

function longestWord(sen) {
  // create an array from the strings
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // sort by lentght

  const sorted = wordArr.sort(function(a, b) {
    // return a.length - b.length; ascending
    return b.length - a.length;
  });
  // if multiple words are longest
  longestWordArr = sorted.filter(function(word) {
    return word.length === sorted[0].length;
  });
  if (longestWord.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}
// longestWord("hello  guys there this is ");
// console.log(longestWord("hello guys there  this is "));

// chunked array of a specific length

function chunkedArray(arr, len) {
  const chunkedArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}
function flattenArray(arrays) {
  return arrays.reduce(function(a, b) {
    return a.concat(b);
  });
}

function isAnagram(str1, str2) {
  if (
    str1
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    str2
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  ) {
    return "is Anagram";
  } else {
    return "is not Anagram";
  }
}

const output = isAnagram("elb ow", "be low");
console.log(output);
