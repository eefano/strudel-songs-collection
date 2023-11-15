await samples({'gtr': 'gtr/0001_cleanC.wav'}, 'github:tidalcycles/Dirt-Samples/master/');

const melodia   = x => x.note().s("ocarina").gain(0.6).clip(1).release(0.1).color(2)
const guitar    = x => x.note().s("gtr").room(1).gain(0.25).clip(1).release(0.5)
const accordi   = x => x.note().s("recorder_bass_sus").gain(1.5).clip(1).release(0.5)
const basso     = x => x.note().s("triangle").gain(0.8).clip(1).sustain(0.8)
const ritmo     = x => x.bank("AlesisHR16").clip(1).gain(0.08)

const scala = "<c#4:major [f#4:major b3:major] [g#4:minor e4:major] [a4:major f#4:minor] [e4:major a4:major]>"
  stack(
 "<[0,2,4]*2>".struct("[x ~]*4").scale(scala).apply(accordi),
// "<[2@3 3] [0@3 2] [4@3 6] [2@3 3] [0@3 1] [-1@3 -2] -3 [0 1]>".scale(scala).transpose(12).apply(melodia),
"<[4 2 0 4 7 9 14 7 9 7]*3 >".scale(scala).transpose(-12).apply(guitar),
"-3".struct("[x ~]*4").scale(scala).apply(basso),
s("[sd,hh*3]!4").apply(ritmo),
).cpm(120/4)


