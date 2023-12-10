/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	let ls = str.toLowerCase()

	let dic = {
		a: 0,
		e: 0,
		i: 0,
		o: 0,
		u: 0,
	}

	for (let l of ls) {
		if (dic.hasOwnProperty(l)) {
			dic[l] += 1
		} else {
			dic[l] = 1
		}
	}

	return dic.a + dic.e + dic.i + dic.o + dic.u
}

module.exports = countVowels
