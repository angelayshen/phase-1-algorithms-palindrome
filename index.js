function reverseWord(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  const reversedWord = reverseWord(word)
  return word === reversedWord
}

/* 
The reverseWord function reverses a word by combining three methods:
1. split('') method to convert the string into an array of individual characters.
2. reverse() method to reverse the order of the elements in the array.
3. join('') method to join the elements of the array back into a single string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
