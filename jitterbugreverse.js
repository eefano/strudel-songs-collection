// "Jitterbug (Coda)" - In Reverse
// song @by Cardiacs
// script @by eefano
setDefaultVoicings('legacy')
const melody = 
  `f#4@3 d4@4 g4@6 g#4@4 f4@3 d#4@3 e4@4 c#4@6 b3@4 g#3@3 g#4@5 a4@4 f#4@3 d#4@3 f#4@4 g4@6 a4@4 a#4@6 d#4@3.9 ~@0.1 d#4@3
   f4@3 d4@4 d#4@5 e4@3 g4@4 e4@6 f#4@4 c4@2.9 ~@0.1 c4@3 g#3@4 a#3@4 b3@6 c#4@4 g4@6 a4@4 a#4@6 d#4@3.9 ~@0.1
   d#4@3 f#4@3.5 ~@0.5
   f#4@3 d4@4 g4@6 g#4@4 f4@3 d#4@3 e4@4 c#4@6 b3@4 g#3@3 g#4@5 a4@4 f#4@3 d#4@3 f#4@4 g4@6 a4@4 a#4@6 d#4@3.9 ~@0.1 d#4@3
   c#4@4 f#4@4
   f4@3 d4@4 d#4@5 e4@3 g4@4 e4@6 f#4@4 c4@2.9 ~@0.1 c4@3 g#3@4 a#3@4 b3@6 c#4@4 g4@6 a4@4 a#4@6 d#4@3.9 ~@0.1
   e4@4 g4@7.9 ~@0.1 f4@4 f#4@4.9 ~@0.1 d#4@3 e4@4 c#4@6.9 ~@0.1 f#4@2 f4@3.9 ~@0.1`
  .rev();
const chords = 
 `D@2 G@2 C D#@2 G#@2 C# B@2 E@2 A F#m@2 B@2 G#@2 C#@2 A@2 D Cm@2 F#@2 D# Em@2 A@2 F# D#m@2 G#@2
  Cm F@2
  Bm@2 B@2 C@2 G@2 C A@2 D@2 Am C@2 G#@2 F#@2 E B@2 C#m@2 D# Em@2 A@2 F# D#m@2 G#@2
  Cm F#@2
  D@2 G@2 C D#@2 G#@2 C# B@2 E@2 A F#m@2 B@2 G#@2 C#@2 A@2 D Cm@2 F#@2 D# Em@2 A@2 F# D#m@2 G#@2
  Cm F#@4 F@2
  Bm@2 B@2 C@2 G@2 C A@2 D@2 Am C@2 G#@2 F#@2 E B@2 C#m@2 D# Em@2 A@2 F# D#m@2 G#@2
  C#m@2 D#@4 C#@2 F#@2 B@2 E@2 C#m@2 F#@2 A#@2`
  .rev();

stack(  
 chord(chords).anchor("C5").voicing().s("gm_rock_organ").pan(0.4).gain(0.9), 
 chord(chords).anchor("G5").voicing().s("gm_pad_choir").pan(0.6).gain(0.9), 
 chords.rootNotes(2).note().s("gm_lead_2_sawtooth").attack(0.2).sustain(1.2).lpf(1000).gain(0.5),
 melody.note().s("gm_lead_1_square").attack(0.02).sustain(1.5).lpf(1200).gain(0.75),
).cpm(115/183).room(    slider(0.91,0,10)) .rsize(   slider(4,0,8,1))

