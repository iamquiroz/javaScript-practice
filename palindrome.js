
function hasWhiteSpace(s) {
  return /\s/.test(s);
}

function solution (str) {
  return str == str.split('').reverse().join('');
}

/*
	UPD. Keep in mind however that this is pretty much "cheating" approach, 
	a demonstration of smart usage of language features, but not the most 
	practical algorithm (time O(n), space O(n)). For real life application 
	or coding interview you should definitely use loop solution. 
	The one posted by Jason Sebring in this thread is both simple and efficient (time O(n), space O(1)).

*/
//console.log(hasWhiteSpace("hello World!"));
//console.log(hasWhiteSpace("HelloWorld!"));

console.log(solution("Hello World"));
console.log(solution("anita lava la tina"));
console.log(solution("abcd"));
console.log(solution("aabaa"));
