input.onButtonPressed(Button.A, function () {
    if (x != 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x != 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.pause(1000)
basic.forever(function () {
    while (x != 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
        basic.pause(1000)
    }
    while (x != 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
        basic.pause(1000)
    }
})
