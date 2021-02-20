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
radio.setGroup(2)
