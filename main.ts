input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(0, 10))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("smile")
})
radio.setGroup(2)
