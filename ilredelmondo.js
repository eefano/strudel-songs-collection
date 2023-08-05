const accordi   = x => x.note().s("recorder_tenor_sus").clip(1).release(0.5)
const melodia   = x => x.note().s("sax").gain(0.3).clip(1).release(0.5)
const walking   = x => x.note().s("triangle").clip(1).release(0.1)
const ritmo     = x => x.bank("YamahaRY30").clip(1).gain(0.08)
const scaleggio = x => x.piano().gain(0.2)

const myscale = "[e:major e:minor]!3 [e:major]@0.5".slow(14)

const scala2 = "<e:major e:minor>".slow(2.5)

const verse = stack(
"[4 5 6 7]*2".scale(scala2).note().apply(scaleggio),  
"[0@4 [7 ~]!2 0@3 7@2 ~ 7 ~ 0@3 7@3]/2.5".scale(scala2).transpose(-12).apply(walking),
s("hh!4").apply(ritmo)
)

const chorus = stack(
"[0,2,4]/2".scale(myscale).apply(accordi),
"[-3@3 -2 -1@3 0 -1@8 0@3 1 2@3 3 2@8 2@8 2@8 1@8]/14".scale(myscale).transpose(12).apply(melodia),
"~ -3 [0 ~] [0 ~] [1 ~] [1 ~] [2 3] [4 ~] ".scale(myscale).apply(walking),
s("[[bd [sd [~ bd]] [bd bd] sd,hh!7 oh]!13 [bd sd sd*4 lt*4,hh!3 oh ~!4]]/14").apply(ritmo),
//s("hh!4").apply(ritmo)
)

//verse.cpm(91/4)
//chorus.cpm(91/4)

arrange([10,verse],[14,chorus]).cpm(91/4)  
