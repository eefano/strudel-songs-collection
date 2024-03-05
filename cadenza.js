// "The Cardiacs Cadence"
// script @by eefano
const magic = "G@3 Bm E@3 G#m C#@3 Fm A#@3 Dm".slow(16);

stack(
chord(magic).anchor("G4".transpose("<3 0 -3 0>")).voicing().struct("x").piano().gain(cosine.segment(16).range(0.5,1).slow(8)),
chord(magic).anchor("B5".transpose("<0 -3 6 3>".slow(16))).voicing().s("gm_drawbar_organ").gain(0.8),
"<G2 E2 C#2 A#2>".transpose("[-0 <-12 -8>]*2").struct("x!8").slow(4).note().lpf(180).s("gm_electric_bass_finger").gain(1)
).cpm(120/2).room(0.5).pianoroll()
