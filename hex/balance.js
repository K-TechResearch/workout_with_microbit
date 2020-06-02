input.onButtonPressed(Button.A, function () {
    count = 0
    flagA = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    start = input.runningTime()
    end = start + GAMETIME
    tempvalue = input.acceleration(Dimension.Strength)
    i = 0
    while (end > input.runningTime()) {
        countprog()
    }
    count = Math.round(count / i)
    flagA = 1
})
input.onButtonPressed(Button.B, function () {
    serial.writeNumber(tempdiff)
    serial.writeString(",")
})
function countprog () {
    basic.pause(JUDGETIME)
    tempdiff = Math.abs(tempvalue - input.acceleration(Dimension.Strength))
    count += tempdiff
    MAX = Math.max(MAX, tempdiff)
    tempvalue = input.acceleration(Dimension.Strength)
    i += 1
}
let MAX = 0
let tempdiff = 0
let i = 0
let tempvalue = 0
let end = 0
let start = 0
let flagA = 0
let count = 0
let JUDGETIME = 0
let GAMETIME = 0
GAMETIME = 60000
JUDGETIME = 200
basic.forever(function () {
    while (flagA > 0) {
        basic.showString("C")
        basic.showNumber(count)
        basic.showString("M")
        basic.showNumber(MAX)
    }
})
