input.onButtonPressed(Button.A, function () {
    count = 0
    flagA = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    start = input.runningTime()
    end = start + GAMETIME
    flagSTART = 0
    tempdiff = 0
    while (end > input.runningTime()) {
        countprog()
    }
    flagA = 1
    count = Math.round(count / (GAMETIME / JUDGETIME))
})
function countprog () {
    if (flagSTART == 0) {
        tempvalue = input.acceleration(Dimension.Strength)
        flagSTART = 1
        配列.push(tempdiff)
        basic.pause(JUDGETIME)
    } else {
        tempdiff = Math.abs(input.acceleration(Dimension.Strength) - tempvalue)
        tempvalue = input.acceleration(Dimension.Strength)
        count += tempdiff
        MAX = Math.max(MAX, tempdiff)
        配列.push(tempdiff)
        basic.pause(JUDGETIME)
    }
}
input.onButtonPressed(Button.B, function () {
    serial.writeNumbers(配列)
})
let MAX = 0
let 配列: number[] = []
let tempvalue = 0
let tempdiff = 0
let flagSTART = 0
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
