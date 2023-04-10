input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(500)
    music.playMelody("- C5 B A G F E D ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    music.playMelody("C D E F G A B C5 ", 120)
})
basic.showLeds(`
    # . . . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
music.playMelody("- C D E F G A B ", 120)
