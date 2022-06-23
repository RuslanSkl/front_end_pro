let userNumberOne = prompt('Please enter the first number')
let userNumberTwo = prompt('Please enter the second number')
let userNumberThree = prompt('Please enter the third number')
let userNumberFour = prompt('Please enter the fourth number')
const array = [userNumberOne, userNumberTwo, userNumberThree, userNumberFour]
alert ('The multiplication of the largest and smallest number is' + ' ' + Math.max(...array) * Math.min(...array)) 