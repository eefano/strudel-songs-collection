// "The Sicilian Clan" (work In Progress)
// song @by Ennio Morricone
// script @by eefano
const chrds = "<Am@3 E  Edim@2 D@3  Ddim E7@2 Am@3 [B@2 A#]@3 A@2 Am@2 E@2 Am@4>*2";
const anchr = "<E4@3 E4 E4@2   D4@3 D4  D4@2 C4@3 [B3@2 A#3]@3 A3@2 A3@2 G#3@2 A3@4>*2";
const dickt = {
    '': ['0 4 7', '4 7 12', '7 12 16'], // major chords (no symbol)
    m: ['0 3 7', '3 7 12', '7 12 15'], // minor chords via 'm'
    dim: ['0 3 6', '3 6 12', '6 12 15'], // diminished
    7: ['4 7 10'], // upper 7th
  };
stack(
n("<0@12 1@2>".pickRestart(["<[~ 0 1 0 2@2]!14 [~ 0 1 2 2@2] [~ 1 4 3 4@2]>*8/6","<2 ~>"]))
  .chord(chrds).dict(dickt).anchor(anchr).voicing().s("gm_electric_guitar_jazz").gain(0.8).color('red'),
n("<[2@2 ~ 2 1@2 ~@2]!4>")
  .chord(chrds).dict(dickt).anchor(chrds.rootNotes(2)).voicing().s("gm_electric_bass_finger").lpf(190).gain(1).color('blue'),
"<A4@2 C5 B4 A#4@2 A4@3 C5 B4 A#4 A4@2 C5@2 B4 A#4@2 A4@2 C5 B4 A#4 A4@2 ~@2>*2"
  .note().s("gm_oboe").gain(0.4).color('green'),
chord(chrds).anchor("G4").struct("x*4").dict(dickt).voicing().s("gm_synth_strings_2").gain(0.2).color('yellow'),

s("[~ rim]*2").bank("AlesisHR16").gain(0.4),
s("rd*8").note(42).bank("AkaiLinn").gain(0.08)
  
).cpm(120.3/4).room(0.6)//.pianoroll();