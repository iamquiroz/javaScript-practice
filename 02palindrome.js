function hasWhiteSpace(s) {
  return /\s/.test(s);
}

function solution(str) {
  return str == str.split("").reverse().join("");
}

/*
	UPD. Keep in mind however that this is pretty much "cheating" approach, 
	a demonstration of smart usage of language features, but not the most 
	practical algorithm (time O(n), space O(n)). For real life application 
	or coding interview you should definitely use loop solution. 
	The one posted by Jason Sebring in this thread is both simple and efficient (time O(n), space O(1)).

*/
// CheckPalindrome Solution 2

function solution2(inputString) {
  // finde the length of a string
  const length = inputString.length;

  // loop through half of the string
  for (let i = 0; i < length / 2; i++) {
    // check if first and last string are same
    if (inputString[i] !== inputString[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let string1 = "Hello World";
let string2 = "anita lava la tina";
let string3 = "abcd";
let string4 = "aabaa";

console.log(solution2(string1));
console.log(solution2(string2));
console.log(solution2(string3));
console.log(solution2(string4));

// missing map implementation
// better solution for palindrome
// how to implement testing

