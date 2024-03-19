// HAPPY BIRTHDAY
setDefaultVoicings('legacy')

const chrds = "F@3 C@6 F@6 Bb@3 F@2 C F@3".slow(8);

stack(
"[C4@3 C4] D4 C4 F4 E4@2 [C4@3 C4] D4 C4 G4 F4@2 [C4@3 C4] C5 A4 F4 E4 D4 [Bb4@3 Bb4] A4 F4 G4 F4@2".slow(8).early(1/3).note().s("gm_harmonica").gain(0.4).color('green'),
chord(chrds).anchor("G4").struct("x*3").voicing().piano().gain(0.2).color('yellow'),
n("2 ~ ~ 2 1 ~").chord(chrds).anchor(chrds.rootNotes(2)).voicing().s("gm_electric_bass_finger").lpf(190).gain(1).color('blue'),

s("hh*3, <bd ~>, ~ ~ rim").bank("KorgDDM110").gain(0.2)
              
).cpm(120/4).room(0.3)//.pianoroll();
