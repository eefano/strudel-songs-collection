const chrds = "A@2 E@2 A F#m B@2 E@2 A ~ F#@4 A@2 ~ F#@4 ~@2".slow(25/4);

stack(
n(run(6).palindrome().fast(5)).clip(2).chord(chrds).anchor(chrds.rootNotes(5)).voicing().s("gm_electric_guitar_jazz"),
chord(chrds).anchor("B4").voicing().s("gm_piccolo")
             
).gain("0.4@12 1@4 0.4@3 1@4 0.4@2".slow(25/4)).cpm(95/4).room(0.5)