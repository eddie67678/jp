input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    for (let index = 0; index <= 59; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
        console.log("Pawel Cringe" + ("" + ("" + index)))
    }
})
let myCounter = 0
for (let index = 0; index < 9999; index++) {
    myCounter += 1
    basic.showNumber(myCounter)
}
