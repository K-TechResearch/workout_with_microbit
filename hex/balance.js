input.onButtonPressed(Button.A, function () {
    count = 0
    flagA = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    start = input.runningTime()
    end = start + GAMETIME
    while (end > input.runningTime()) {
        countprog()
    }
    flagA = 1
    count = Math.round(count / (GAMETIME / JUDGETIME))
    count = count - 0
    MAX = MAX - 0
})
function countprog() {
    count += Math.abs(input.acceleration(Dimension.Strength) - 1023)
    MAX = Math.max(MAX, Math.abs(input.acceleration(Dimension.Strength) - 1023))
    basic.pause(JUDGETIME)
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.acceleration(Dimension.Strength))
})
let MAX = 0
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
