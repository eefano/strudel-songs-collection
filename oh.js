// "Oh" (By Tim Smith of Spratleys Japs)
const ln = 24;
const cresc = saw.range(0.4,0.7).slow(ln*2);
const chrds = "G#@4 F#@2 B@3 E A@2 D G@2 A G@4 A G@4 G# C# F# B E A@2 B A@2 C D#@6 F@2 D#@4".slow(ln);
const meldy = "[d#5@4 d#5@2 d#5@3 e5 c#5@2 d5 d5@2 c#5 b4@4 c#5 b4@4 c5 f5 a#4 d#5 g#4 e5 [b4@3 d#5] f#5 d#5@2 e5 g4 g5@3 f5 a5@4 a#5@3]".slow(ln);
stack(     
  meldy.note().s('gm_piccolo').gain(add(cresc,0.1)).color("yellow"), 
  
  chord(chrds).anchor("C4".transpose(run(12).slow(ln))).voicing().s('gm_choir_aahs').pan(0.6).gain(add(cresc,tri.range(0,0.1).slow(ln))),
  chord(chrds).anchor("C5".transpose(run(12).slow(ln))).voicing().s('gm_string_ensemble_2').pan(0.4).gain(add(cresc,tri.range(0,0.1).slow(ln))),
  
  n("[0 1 2 3 4 3 4 5 4 3 2 3 2 1]*1.7").chord(chrds).anchor("C6").voicing().s('gm_oboe').room(0.5).gain(0.18),
  chrds.rootNotes("[1 2]!2").struct("x*8").clip(0.90).note().s('gm_electric_bass_finger').lpf(280).gain(0.5),

  s("[bd!2 ~ bd]*2").bank("AkaiLinn").lpf(200).gain(0.15),
  s("<~ sd>*4").bank("AkaiLinn").hpf(250).lpf(4000).gain(0.30),
  s("hh*8").gain(0.15) 
).cpm(90/4).room(0.7) //.pianoroll()
