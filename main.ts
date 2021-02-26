function goAhead (m1: number, m2: number, image: Image) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -200,
    SuperBit.enMotors.M2,
    200
    )
    nn.showImage(0)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("straight")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -125,
        SuperBit.enMotors.M2,
        10
        )
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "right") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        10,
        SuperBit.enMotors.M2,
        125
        )
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M2,
        200
        )
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
let nn: Image = null
WSJoyStick.JoyStickInit()
radio.setGroup(2)
nn = images.arrowImage(ArrowNames.North)
let ss = images.arrowImage(ArrowNames.South)
let ww = images.arrowImage(ArrowNames.West)
let ee = images.arrowImage(ArrowNames.East)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U) || false) {
        goAhead(-125, 20, nn)
    } else {
    	
    }
    if (WSJoyStick.Listen_Key(KEY.F)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M2,
        0
        )
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
