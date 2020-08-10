input.onButtonPressed(Button.A, function () {
    OLED.writeStringNewLine("button A is pressed")
})
input.onButtonPressed(Button.AB, function () {
    OLED.clear()
})
input.onButtonPressed(Button.B, function () {
    OLED.writeStringNewLine("button B is pressed")
})
let 토양습도값 = 0
OLED.init(128, 64)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 300) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
basic.forever(function () {
    토양습도값 = pins.analogReadPin(AnalogPin.P2)
    OLED.writeStringNewLine("Humidity =" + 토양습도값)
    basic.pause(2000)
})
