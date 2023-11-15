const chrds = "A@2 E@2 A F#m B@2 E@2 A ~ F#@4 A@2 ~ F#@4 ~@2".slow(25/4);

stack(
n(run(6).palindrome().fast(2)).clip(2).chord(chrds).anchor(chrds.rootNotes(5)).voicing().s("gm_electric_guitar_jazz"),
chord(chrds).anchor("A4").voicing().s("gm_piccolo")
             
).cpm(95/4).room(0.5).pianoroll()