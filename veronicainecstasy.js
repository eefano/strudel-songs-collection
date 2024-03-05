// "Veronica In Ecstasy" (Chorus)
// song @by Tim Smith (of Cardiacs)
// script @by eefano
const chrds = "<B [F# A] [C G] [D C#] [E A] [B C#] [Fm A#] [E A] [A# Fm] [E F#] [E F#]>";
const meldy = `[[f#6]*3 [f#6 [~ ~ f#6]]]  [[f#6]*3 [[f#6 e6 ~] e6]]
               [[e6 e6 [e6 f#6]] [[g6 ~ d6] d6]]  [[d6 d6 [e6 f#6]] [g#6 f6 c#6]]
               [[g#5 [ ~ ~ g#5]]  [[a5 b5] c#6 c#6]]  [[f#6]*3 [f6 c#6 g#5]]
               [[g#5 [ ~ ~ g#5]] [[a#5 c6] d6 a#5]]  [[g#5 a5 b5] [c#6 d6 e6]]
               [[d6 a#5 f5] [[g#5 ~] g#5]] ~ [~@3 [~ ~ f#6]]`.slow(11);
stack(
  meldy.clip(0.9).note(),
  //meldy.transpose("-12").note(),
  chord(chrds).anchor("G4").voicing().struct("<[[~ x x] [x@2 x] [~ x ~] x]!8 [x!4] [~ x ~ x]!2>").gain(0.6),
  chrds.rootNotes(2).note().struct("<[x@2 ~]*2!9 [x ~ [~ ~ x] ~]!2>").gain(0.6),
).cpm(120/4).room(0.4).piano()//.pianoroll()
 .room(    slider(1.93,0,10))
  .rsize(   slider(2,0,8,1))