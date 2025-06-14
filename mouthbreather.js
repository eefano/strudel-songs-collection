// "Mouth Breather" (work in progress)
// composed @by The Jesus Lizard
// script @by eefano
setcps(215/60*2)

const xposes = "<0@9 -5 -7 0@4 ~ 0@2 -5 -7 ~@2>/48"
g:"<0@5 1 0 1 0@3 ~@2 0 ~ 0@4 ~@2 >/48".pickRestart(
  [stack("<c3@9 c#3 c3@2>","<g3 f3@2 g3@4 f3 g3 g#3 g3 f3>".add("<0,5>")).struct("<x!4 ~!2 x!9 x@3 x!6>")
  ,"<[c3,g3,c4]@6 ~@42>".add(-3).penv(-3).patt(1)
  ]).note().transpose(xposes).s("gm_electric_guitar_clean:2").distort("10:.17").room(.1)

b:"<~@3 0@2 ~ 0 ~ 0@6 ~ 0@4 ~@2 >/48".pickRestart(["<c2!3 c2@2 ~ c2!3 <[c#2 f2 c#2] [c2 f2 g2]>@3>"])
  .note().transpose(xposes).s("gm_electric_bass_pick").release(.06).distort("5:.3").room(.2).color('green')

d:"<~ 0@14 ~ 0@6>/48".pickRestart(
  [stack(s("<bd ~ bd ~!2 bd!2 ~!2 bd ~!2 bd ~!2 bd ~ bd ~ bd ~!2 bd ~>"),
        s("<~!3 sd ~!6 sd ~!5 sd ~!3 sd ~!3>").gain(1.4),
        s("<oh>/2").speed(1.03).gain(.3).pan(.4),
        s("<cr>/12").speed(1.1).gain(.2).pan(.6))])
  .room(.8).color('cyan')

// all((x)=>x.scope({scale:.05})) //._pianoroll({minMidi:10,maxMidi:60,autorange:false})
