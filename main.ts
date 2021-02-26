function goAhead (m1: number, m2: number, image: Image) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    m1,
    SuperBit.enMotors.M2,
    m2
    )
    image.showImage(0)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("straight")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        goAhead(-125, 10, ww)
    } else if (receivedString == "right") {
        goAhead(10, 125, ee)
    } else if (receivedString == "straight") {
        goAhead(-200, 200, nn)
    } else if (receivedString == "down") {
        goAhead(200, -200, ss)
    } else if (receivedString == "stop") {
        goAhead(0, 0, images.arrowImage(ArrowNames.SouthWest))
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
let ee: Image = null
let ww: Image = null
let ss: Image = null
let nn: Image = null
WSJoyStick.JoyStickInit()
radio.setGroup(2)
nn = images.arrowImage(ArrowNames.North)
ss = images.arrowImage(ArrowNames.South)
ww = images.arrowImage(ArrowNames.West)
ee = images.arrowImage(ArrowNames.East)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendString("straight")
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("left")
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("right")
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendString("down")
    }
    if (WSJoyStick.Listen_Key(KEY.F)) {
        radio.sendString("stop")
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
