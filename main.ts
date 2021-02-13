input.onButtonPressed(Button.A, function () {
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
})
radio.setGroup(2)
