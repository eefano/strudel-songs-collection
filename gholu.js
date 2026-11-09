// "Gholü"
// song @by Oh Sees
// script @by eefano
setcpm(220)
const s = "<0@3 1@16 2@3 1@16 2@3 1@16 2@3 1@16 2@3 1@16 2@3 4@2 ~@6>/4"
const drums = (x) => x.s().layer(y=>y.bank("akailinn").pan(.35),y=>y.bank("linn9000").pan(.75).speed(.99))
const bass = (x) => x.note().s("gm_electric_bass_finger").pan(.55)

$: s.pickRestart(["<c5>/12","~","~","~"]).note().s("supersaw").patt(3).penv(24).vib("8").vmod(".5").gain(.5)

$: s.pickRestart(["~","<g1!11 c2@21>*2","<g2!11 f2@3 f2@2 f2 eb2@3 eb2 d2@3>*2","[d5,c#5]*3"])
  .note().superimpose(x=>x.transpose(12).velocity(.18)).s("gm_overdriven_guitar:6").pan(.45).gain(10)

$: s.pickRestart(["~","<g1!11 c2@21>*2","<g2!11 f2@3 f2@2 f2 eb2@3 eb2 d2@3>*2","<g1 ~@15>"]).apply(bass).gain(20)
$: s.pickRestart(["~","<~@16 bb2 c3!7 bb2 c3!4 bb2!3>*2","~","~"]).mask("<~@22 x@76 ~@8>/4").clip(.98).apply(bass).hpf(50).gain(2)

$: s.pickRestart(["~","<oh!4 oh@2 ~ oh!9>","<oh!4 oh@2 ~!6>","<oh ~@15>"])
  .gain(.1).hpf(4000).apply(drums)

$: s.pickRestart(["~","<cr@11 cr@21>*2","<cr@11 cr@6 cr@4 cr@3>*2","~"])
  .gain(.14).hpf(4000).apply(drums)

$: s.pickRestart(["~","<bd sd bd*2 [sd <~ ~ bd ~>] [bd sd] [sd bd] ~ sd bd sd [~ bd] sd bd sd [bd <bd sd>] [sd <~ sd>]>",
                     "<bd*2 sd bd*2 [sd bd] [bd sd] [sd bd] [~ bd] sd [[sd,[~ sd@3]] bd] ~ [[sd,[~ sd@3]] bd] ~ >","<bd ~@15>"])
  .gain(.45).apply(drums)

$: s.pickRestart(["~","<~@8 <d#2 d#2 d#2*2 d#2>!2 d#2 d#2*2 d#2!2 [d#2 <f2 f2 ~ f2>] <~ ~ d#2 ~>>","~"])
  .mask("<~@22 x@76 ~@8>/4").note().s("crow").gain(1).delay(.4).dfb(.1).dt(.2)

all(x=>x.dist("2:0.35").room(.35).roomsize(1))
