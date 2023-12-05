let count = 30

for (let i = 1; i <= 30; i++) {
	setTimeout(() => {
		console.log(count--)
	}, 1000 * i)
}
