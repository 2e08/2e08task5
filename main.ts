let variable_a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    variable_a = 0
    b = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(variable_a, b)
            variable_a += 1
            basic.pause(200)
        }
        variable_a = 0
        b += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    variable_a = 4
    b = 0
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(variable_a, b)
            basic.pause(200)
            variable_a += -1
        }
        b += 1
        variable_a = 0
        for (let index = 0; index < 4; index++) {
            led.plot(variable_a, b)
            basic.pause(200)
            variable_a = 0
        }
        led.plot(variable_a, b)
        basic.pause(200)
        b += 1
        variable_a = 0
    }
})
