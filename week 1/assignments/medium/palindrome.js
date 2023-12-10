/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
	if (str.length === 1) return true

	let s = str
		.toLowerCase()
		.split(' ')
		.join('')
		.replace(/[^a-z]/g, '')

	let i = 0
	let j = s.length - 1

	while (i < j) {
		if (s[i++] !== s[j--]) return false
	}
	return true
}

module.exports = isPalindrome
