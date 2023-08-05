await samples({'gtr': 'gtr/0001_cleanC.wav'}, 'github:tidalcycles/Dirt-Samples/master/');

const melodia   = x => x.note().s("ocarina").gain(0.6).clip(1).release(0.1)
const guitar    = x => x.note().s("gtr").room(1).gain(0.25).clip(1).release(0.5)
const accordi   = x => x.note().s("recorder_bass_sus").gain(1.5).clip(1).release(0.5)
const basso     = x => x.note().s("triangle").gain(0.8).clip(1).sustain(0.8)
const ritmo     = x => x.bank("AlesisHR16").clip(1).gain(0.08)

const scala = cat('c minor')  // IV VI I III
stack(
"<[3,5,0] [5,0,2] [0,2,4] [2,4,-1]>".scale(scala).apply(accordi),
"<[2@3 3] [0@3 2] [4@3 6] [2@3 3] [0@3 1] [-1@3 -2] -3 [0 1]>".scale(scala).transpose(12).apply(melodia),
"~@2 2 <7 9 6 6>@2 2 <8 6 4 4>@2".scale(scala).transpose(-12).apply(guitar),
"<-4 -2 0 -1>".struct("[[x ~]!2 x x@0.5 [x ~]!2 x@0.5 [x ~]!2]").scale(scala).apply(basso),
s("bd!4,[~ sd]!2,[~ hh!2 hh*2]!2").apply(ritmo),
//s("hh!4").apply(ritmo)
).cpm(113/4)


