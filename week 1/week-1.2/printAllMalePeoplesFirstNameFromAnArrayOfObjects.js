let people = [
	{
		firstName: 'Anoop',
		gender: 'male',
	},
	{
		firstName: 'Harkirat',
		gender: 'male',
	},
	{
		firstName: 'Priya',
		gender: 'female',
	},
	{
		firstName: 'Raju',
		gender: 'male',
	},
	{
		firstName: 'hemanth',
		gender: 'male',
	},
	{
		firstName: 'shilpa',
		gender: 'female',
	},
]

for (let i = 0; i < people.length; i++) {
	if (people[i].gender === 'male') console.log(people[i].firstName)
}
