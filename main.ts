/**
 * moods
 * 
 * 1=happy
 * 
 * 2=hungry
 * 
 * 3=full
 * 
 * 4=sad
 * 
 * 5=sleepy
 */
input.onButtonPressed(Button.A, function () {
    if (mood != 5) {
        hunger += 1
    }
})
function Emotion (mood: number) {
    if (mood == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (mood == 2) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
    } else if (mood == 5) {
        basic.showIcon(IconNames.Asleep)
    } else if (mood == 3) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            `)
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(hunger)
})
let hunger = 0
let mood = 0
mood = 1
hunger = 30
basic.forever(function () {
    basic.pause(3600000)
    mood = 5
    basic.pause(1800000)
    mood = 1
})
basic.forever(function () {
    basic.pause(2000)
    hunger += -1
})
basic.forever(function () {
    if (mood != 5) {
        if (hunger >= 101) {
            hunger = 100
        } else if (hunger <= 30) {
            mood = 2
        } else if (hunger > 40) {
            mood = 1
        } else if (hunger > 80) {
            mood = 3
        } else {
        	
        }
    }
})
basic.forever(function () {
    if (mood == 5) {
    	
    } else {
        if (mood == 1) {
            Emotion(1)
        } else if (mood == 2) {
            Emotion(2)
        } else if (mood == 3) {
            Emotion(3)
        } else {
        	
        }
    }
})
