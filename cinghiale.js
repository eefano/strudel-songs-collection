const accordi   = x => x.note().s("recorder_tenor_sus").clip(1).release(0.5)
const melodia   = x => x.note().s("gm_violin").gain(0.3).clip(1).release(0.5)
const walking   = x => x.note().s("triangle").clip(1).release(0.1)
const ritmo     = x => x.bank("YamahaRY30").clip(1).gain(0.08)
const scaleggio = x => x.piano().gain(0.2)

const myscale = "e:minor"

const v1 = "[[2 1 0 1 2 0 1 2]!2 [4 3 2 3]*3@1.5 [4 ~!3]@0.5 ]/4"
const v2 = "[[2 1 0 1 2 0 1 2]!2 [4 3 2 3]*3@1.5 [4 ~!3]@0.5 ]/4"

stack(
//"[0,2,4]/2".scale(myscale).apply(accordi),
cat(v1,v2).add("<0 1 0 0>").scale(myscale).transpose(12).apply(melodia),
//"~ -3 [0 ~] [0 ~] [1 ~] [1 ~] [2 3] [4 ~] ".scale(myscale).apply(walking),
s("<[bd sd]>,hh*4").apply(ritmo),
//s("hh!4").apply(ritmo)
)


