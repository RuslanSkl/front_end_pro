let x1 = Number (prompt ('Введить початкову позицію коня на осі х'))
if (x1<1 || x1>8) alert ('Ви ввели невірне значення')
let y1 = Number (prompt ('Введить початкову позицію коня на осі у'))
if (y1<1 || y1>8) alert ('Ви ввели невірне значення')
let x2 = Number (prompt ('Введить нову позицію коня на осі х'))
if (x2<1 || x2>8) alert ('Ви ввели невірне значення')
let y2 = Number (prompt ('Введить нову позицію коня на осі у'))
if (y2<1 || y2>8) alert ('Ви ввели невірне значення')

const toUpLeft = (x1+2 == x2 && y1-1 == y2) || (x1+1 == x2 && y1-2 == y2)
const toUpRight = (x1+2 == x2 && y1+1 == y2) || (x1+1 == x2 && y1+2 == y2)
const toDownLeft = (x1-2 == x2 && y1-1 == y2) || (x1-1 == x2 && y1-2 == y2)
const toDownRight = (x1-2 == x2 && y1+1 == y2) || (x1-1 == x2 && y1+2 == y2)
if (toUpLeft || toUpRight || toDownLeft || toDownRight) alert ('True')
else alert ('False')



