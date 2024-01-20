const characters = 'abcdefghijklmnopqrstuvwxyz'

export const generateRandomWord = () => {
	const wordLength = Math.floor(Math.random() * 8) + 3
	let randomWord = ''

	for (let i = 0; i < wordLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		randomWord += characters[randomIndex]
	}

	return randomWord
}

export const generateRandomParagraph = (paragraphLength = 200) => {
	if (!paragraphLength || typeof paragraphLength !== 'number')
		return 'nnnnnnnnnn'

	let randomParagraph = ''

	while (randomParagraph.length < paragraphLength)
		randomParagraph += generateRandomWord() + ' '

	return randomParagraph.trim()
}
