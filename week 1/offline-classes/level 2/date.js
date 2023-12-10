const currentDate = new Date()

console.log('Current Date: ', currentDate)

// * get functions
console.log('Time   : ', currentDate.getTime()) // * epoch timestamp number of seconds past after 1970
console.log('Date   : ', currentDate.getDate())
console.log('Month  : ', currentDate.getMonth()) // 0 - 11
console.log('Year   : ', currentDate.getFullYear()) // 2023
console.log('Year   : ', currentDate.getYear()) // 2023 - 1900
console.log('Day    : ', currentDate.getDay()) // 0 - 6
console.log('Minute : ', currentDate.getMinutes())
console.log('Seconds: ', currentDate.getSeconds())
console.log('Hours  : ', currentDate.getHours())

// * set functions
currentDate.setFullYear(2022)
console.log('After setFullYear:', currentDate)

currentDate.setMonth(5) // * Setting month to June (zero-indexed)
console.log('After setMonth:', currentDate)

// * Getting and setting time in milliseconds since 1970
console.log('Time in milliseconds since 1970:', currentDate.getTime())

const newDate = new Date(2023, 8, 15) // * Creating a new date
console.log('New Date:', newDate)
