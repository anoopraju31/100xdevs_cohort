// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

//* Length
function getLength(str) {
	console.log('Original String:', str)
	console.log('Length:', str.length)
}

getLength('Hello World')

//* indexOf(target)
function findIndexOf(str, target) {
	console.log('Original String:', str)
	console.log('Index:', str.indexOf(target))
}

findIndexOf('Hello World', 'World') //* prints the starting index of 'world'
findIndexOf('Hello World', 'Ola') //* prints - 1

//* lastIndexOf(target) - returns the last instances
function findLastIndexOf(str, target) {
	console.log('Original String:', str)
	console.log('Index:', str.lastIndexOf(target))
}

findLastIndexOf('Hello World World World', 'World')

//* slice(start, end)
function getSlice(str, start, end) {
	console.log('Original String:', str)
	console.log('After slice:', str.slice(start, end))
}

getSlice('Hello World', 0, 5) // returns a slice of a string starting from '0' does not include the 5th index

// ! substr - depreciated : substr(start, length) returns a substring of length n from the starting index
function getSubstring(str, start, end) {
	console.log('Original String:', str)
	console.log('After substr:', str.substr(start, end))
}
getSubstring('Hello World', 6, 4) //

//* substring(start, end)
function getSubstring(str, start, end) {
	console.log('Original String:', str)
	console.log('After substring:', str.substring(start, end))
}
getSubstring('Hello World', 2, 4)

//* replace(target, replacement)
function replaceString(str, target, replacement) {
	console.log('Original String:', str)
	console.log('After replace:', str.replace(target, replacement))
}
replaceString('Hello World', 'World', 'JavaScript')

//* split(seperator) - splits the string based on a delimiter
function splitString(str, separator) {
	console.log('Original String:', str)
	console.log('After split:', str.split(separator))
}
splitString('Hello World', ' ')
splitString('Hello World', 'l')

//* trim() trims out the excess space from start and end of string
function trimString(str) {
	console.log('Original String:', str)
	console.log('After trim:', str.trim())
}
trimString('   Hello World    ')

//* toUpperCase()
function toUpper(str) {
	console.log('Original String:', str)
	console.log('After toUpperCase:', str.toUpperCase())
}
toUpper('Hello World')

//* toLowerCase()
function toLower(str) {
	console.log('Original String:', str)
	console.log('After toLowerCase:', str.toLowerCase())
}
toLower('Hello World')
