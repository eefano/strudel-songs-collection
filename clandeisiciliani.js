// "The Sicilian Clan" (work In Progress)
// song @by Ennio Morricone
// script @by eefano
setcpm(120/4)
samples({'jewharp': {'d2': 'https://cdn.freesound.org/previews/518/518645_8956746-lq.mp3'}})
const dic = {
    '': ['0 4 7', '4 7 12', '7 12 16'], // major chords (no symbol)
    m: ['0 3 7', '3 7 12', '7 12 15'], // minor chords via 'm'
    dim: ['0 3 6', '3 6 12', '6 12 15'], // diminished
    7: ['4 7 10'], // upper 7th
  };
const har = "<1@2 0@14 1@24 1@24>".pickRestart([
"<Am:E4@3 E:E4 Edim:E4@2 D:D4@3 Ddim:D4 E7:D4@2 Am:C4@3 [B:B3@2 A#:A#3]@3 A:A3@2 Am:A3@2 E:G#3@2 Am:A3@4>*2",
"<Am:E4 E:E4 Edim:E4 A7:A3 D:D4 Ddim:D4 Bdim:E4 E7:D4 Am:C4 Ebdim:Eb4 [B:B3 A#:A#3] Am:A3>/2"
])
const chr = har.withValue(v=>v[0])
const anc = har.withValue(v=>v[1])

$: n("<~@2 0@12 1@2 2@22 3@2 2@22 3@2>".pickRestart([
  "<[~ 0 1 0 2@2]!14 [~ 0 1 2 2@2] [~ 1 4 3 4@2]>*8/6","<2 ~>","[[~ 0 1 0 2@2]!2@2 ~]/2","[~ 0 1 0 2@2 ~ 0 1 3 2@4 ~@2]/2"
  ])).chord(chr).dict(dic).anchor(anc).voicing().s("gm_electric_guitar_jazz").gain(0.8).color('red')

$: n("2@2 ~ 2 1@2 ~@2")
  .chord(chr).dict(dic).anchor(chr.rootNotes(2)).voicing().s("gm_electric_bass_finger").lpf(190).gain(1).color('blue')

$: "<~@2 0@14 ~@24 ~@24>".pickRestart(["<A4@2 C5 B4 A#4@2 A4@3 C5 B4 A#4 A4@2 C5@2 B4 A#4@2 A4@2 C5 B4 A#4 A4@2 ~@2>*2"])
  .note().s("gm_oboe").gain(0.4).color('green')

$: chord(chr).dict(dic).anchor("G4").voicing().struct("x*4").s("gm_synth_strings_2").gain(0.25).color('yellow')

$: "<~@2 ~@14 0@24 0@24>".pickRestart([
  `<E5@6 F5 G5 F5 E5@7 E5@5 E5 G5 F5 F5 E5@5 D5 C#5 D5@6 E5 _ E5 D5@4 C#5 E5 D5 D5@4 C5 _ B4 _ E5 D5@5
    C5 B4 C5@6 B4 A4 D5 C5@4 A4 D5 C5 B4@4 A#4 _ A4 G#4 B4 A4@4 ~@4>*4`
  ]).note().s("gm_string_ensemble_1").transpose("<~@16 -12@24 [-12,0]@24>").att(.15).rel(.2).hpf(200).gain(.7)

$: s("[~ rim]*2").bank("AlesisHR16").gain(0.35)
$: s("rd*8").note(42).bank("AkaiLinn").gain(0.08)
$: s("<~@2 ~@12 [~ jewharp!3]@2 ~@3 jewharp ~@19 jewharp ~@3 jewharp ~@19 jewharp>").begin(.1).gain(.5)
  
all(x=>x.room(0.8)
 //.ribbon(14+19,24)
)