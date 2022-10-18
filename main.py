def on_button_pressed_a():
    music.set_volume(255)
    for index in range(60):
        music.play_tone(349, music.beat(BeatFraction.WHOLE))
        music.play_tone(880, music.beat(BeatFraction.WHOLE))
        music.play_tone(147, music.beat(BeatFraction.WHOLE))
        music.play_tone(988, music.beat(BeatFraction.WHOLE))
        print("Pawel Cringe" + ("" + str(index)))
input.on_button_pressed(Button.A, on_button_pressed_a)

myCounter = 0
for index2 in range(9999):
    myCounter += 1
    basic.show_number(myCounter)