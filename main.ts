function goAhead (m1: number, m2: number, image: Image) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    m1 * v,
    SuperBit.enMotors.M2,
    m2 * v
    )
    image.showImage(0)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
WSJoyStick.onKey(KEY.E, function () {
    v = v + 0.2
    music.playMelody("C E F G A B C5 C5 ", 960)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("straight")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        goAhead(-100, 10, ww)
    } else if (receivedString == "right") {
        goAhead(10, 100, ee)
    } else if (receivedString == "straight") {
        goAhead(-200, 200, nn)
    } else if (receivedString == "down") {
        goAhead(200, -200, ss)
    } else if (receivedString == "stop") {
        goAhead(0, 0, images.createImage(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `))
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
WSJoyStick.onKey(KEY.C, function () {
    v = v - 0.2
    music.playMelody("C5 B A G F E D D ", 960)
})
radio.onReceivedValue(function (name, value) {
    if (name == "v") {
        v = value
    }
})
let ee: Image = null
let ww: Image = null
let ss: Image = null
let nn: Image = null
let v = 0
WSJoyStick.JoyStickInit()
radio.setGroup(2)
let dir = ""
let old_dir = ""
v = 1
nn = images.arrowImage(ArrowNames.North)
ss = images.arrowImage(ArrowNames.South)
ww = images.arrowImage(ArrowNames.West)
ee = images.arrowImage(ArrowNames.East)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        dir = "straight"
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        dir = "left"
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        dir = "right"
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        dir = "down"
    }
    if (WSJoyStick.Listen_Key(KEY.F)) {
        dir = "stop"
    }
    if (old_dir != dir) {
        radio.sendString(dir)
        radio.sendValue("v", v)
    }
    old_dir = dir
})
