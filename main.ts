input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
let _1 = 1
let _2 = 2
let _3 = 3
let piscar: boolean = 0
let pisque = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
if (pisque == 1) {
    basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
}
basic.forever(function () {
    piscar = _1 || (_2 || _3)
    basic.pause(piscar)
    pisque = 1
})
