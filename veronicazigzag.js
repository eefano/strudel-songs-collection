
const chrds = "<B [F# A] [C G] [D C#] [E A] [B C#] [Fm A#] [E A] [A# Fm] [E F#] [E F#]>".rev();
const meldy = `[[f#6]*3 [f#6 [~ ~ f#6]]]  [[f#6]*3 [[f#6 e6 ~] e6]]
               [[e6 e6 [e6 f#6]] [[g6 ~ d6] d6]]  [[d6 d6 [e6 f#6]] [g#6 f6 c#6]]
               [[g#5 [ ~ ~ g#5]]  [[a5 b5] c#6 c#6]]  [[f#6]*3 [f6 c#6 g#5]]
               [[g#5 [ ~ ~ g#5]] [[a#5 c6] d6 a#5]]  [[g#5 a5 b5] [c#6 d6 e6]]
               [[d6 a#5 f5] [[g#5 ~] g#5]] ~ [~@3 [~ ~ f#6]]`.slow(11).rev();
stack(
  meldy.legato(0.9).note(),
  chord(chrds).anchor("G4").voicing().struct("<[[~ x x] [x@2 x] [~ x ~] x]!8 [x!4] [~ x ~ x]!2>").gain(0.55),
  n("0").chord(chrds).mode("root:c3").voicing().struct("<[x@2 ~]*2!9 [x ~ [~ ~ x] ~]!2>").gain(0.7),
).cpm(105/4).piano()
 .room(    slider(1.55,0,10))
  .rsize(   slider(4,0,8,1))


