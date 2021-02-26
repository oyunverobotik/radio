def on_button_pressed_a():
    radio.send_string("left")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("straight")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    if receivedString == "left":
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, -125, SuperBit.enMotors.M2, 10)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif receivedString == "right":
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, 10, SuperBit.enMotors.M2, 125)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    else:
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, -200, SuperBit.enMotors.M2, 200)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string("right")
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(2)