// "Appealing to Venus" 
// song @by The Sea Nymphs
// script @by eefano
const chords = `<Cm@2 Ab@2 Db@2 Cm F Bb C@2 F Bb C@2 F Bb Eb Dm [Cm Dm] [Eb ~] Eb Dm [Cm Dm] [Eb ~]
                C@2 Ab Eb Ab A E B Db Cm [Bbm Cm] [Db ~] Db Cm [Bbm Cm] [Db ~]>/2`
stack( 
  // melody
  `<
     ~@2 c5 d5@2 eb5 d5@3 c5@2 g#4@3 eb5@8 ~@2
   ~@2 c#5 d#5@2 f5 d#5@3 c#5@2 d#5@3
   d#5@3 f5@3 a5@3 a#5@3 a#5@3 g5@6 f5 e5@4 
   ~ e5 f5@2 a5@3 a#5@3 a#5@3 g5@6 f5 e5@4 
   ~ e5 f5@2 a5@3 a#5@3 a#5@3 
   g5@7 f5@6 d#5@3 f5@3 g5@6
   ~@24

    e5@2 e5@3 f5@3 g5@3 g#5@3 g5@3 g5@3 c6@3
    c6@3 c6@3 c#6@3 b5@3 [f#5 g#5 f#5@3]@3 e5@3 b5@3 b5@3
    g#5@7 d#5@6 c#5@3 d#5@3 f5@6
    ~@24
   >*3`.note().clip(0.95).s('gm_oboe').gain(0.5)
  ,
  // second voice
  `<
    ~@150
  
    c5@2 c5@3 d5@3 e5@3 d#5@3 d#5@3 c5@3 g5@3
    g5@3 g5@3 g#5@3 e5@3 [c#5 d#5 c#5@3]@3 b4@3 f#5@3 f#5@3
    c#5@7 c5@6 a#4@3 c5@3 c#5@6
    ~@24
   >*3`.note().clip(0.95).s('gm_oboe').gain(0.5)
  ,
  chords.rootNotes(2).note().s('gm_bassoon').lpf(400).gain(0.5),
  chord(chords).anchor("C5").voicing().struct("x").piano().gain(0.4),
  chord(chords).anchor("E5").voicing().s('gm_drawbar_organ').gain(0.15),
  
).cpm(120).room(0.5)//.pianoroll()