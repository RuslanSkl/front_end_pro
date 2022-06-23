let userAge = prompt('Please enter your age')
const digit = userAge % 10
let year = 'років'
if (digit == 1 && userAge != 11) {
    year = 'рік'
}
if ((digit == 2 || digit == 3 || digit == 4) && userAge != 12 && userAge != 13 && userAge != 14) {
    year = 'роки'
}
alert('Вам ' + userAge + ' ' + year)