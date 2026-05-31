// "Fairy Mary Mag" (work in progress)
// song @by Cardiacs
// script @by eefano

setcpm(90)

const anch = "<b3>/2"

$: chord("<A  _ G _ C  _ A  _ E   _ G Am E  G  Bm E   G  Bm E>/2")
  .anchor(anch)
  .mode('above').n("0,1,2,3").voicing().s("gm_choir_aahs:2").rel(.2).gain(.8).jux(late(.0005)).color('green')

$: note(anch).s('hh').end(0).color('red')   // if the mode('above') bug gets fixed, it should be the lower barrier

$: note(`<~ e4 c#4 a3 g4 [f#4 e4] d4 [e4 ~] g4 [f#4 e4] 
         c4 [~ g3] a3 [~ a4] g4 [~ e4] b3 e4 [g#4 e4] ~ 
         b3 e4 e4 c4 [b3@5 g#3@2 e3@4 b2@3]@2 [~ b2@11]@6 ~@6>`)
  .s("gm_choir_aahs:4").clip(.95).gain(1).delay(.6).dt(.5).dfb(.3).att(.02).color('gray')

all(x => x.room(.5)
  .pianoroll({ labels: false, fold: false, minMidi: 35, maxMidi: 125, cycles: 30 })

  //.ribbon(23,12)
)