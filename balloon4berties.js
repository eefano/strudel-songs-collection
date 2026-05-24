// "A Balloon For Bertie's Party (coda)"
// song @by Cardiacs
// script @by eefano
setcpm(90*3/4)

$: n("0,~ [1,2]!2").chord("<0@4 0@4 0@31 0@31 0@17 1@5 ~@8>".pickRestart([
  "<B Bm B Bm B G E F# E F# E F# G# F# E F# E B D C# F F# G# F# E F# G# F# E F# E >","<F# E>"]))
  .anchor("<0@8 0@17 1@4 2@10 0@17 1@4 2@10 0@17 0@5 ~@8>".pickRestart(["<D#3 D3>","<C#3>","<D3 D#3>"]))
  .mode('above').voicing().s("gm_vibraphone").gain(.25).room(.6)

$: note("<~@8 0@31 0@31 0@17 ~@13>".pickRestart([
        `<b3 a3 b3 a3 [b3 _ c#4] [d4 _ c#4] [b3 _ g#3] [f#3 _ a#3] [g#3 _ e3] 
         [f#3 _ a#3] [g#3 _ e3] [f#3 _ a#3] [c4 _ g#3] [f#3 _ a#3] g#3@2 ~ 
         [b2 _ c#3] [d3 _ f#3] [f3 _ c#3] [f3 ~ f3] [f#3 _ a#3] [c4 _ g#3] 
         [f#3 _ a#3] [g#3 _ e3] [f#3 _ a#3] [c4 _ g#3] [f#3 _ a#3] g#3@2 ~ >`]))
  .mask("<~@8 x@31 x@8 ~@2 [~ ~ x] x@6 x@14 x@17 ~@13>")
  .s("saw").clip(.6).att(.02).rel(.25).vib(5).vmod(.1).hpf(500).lpf(1600).room(.2).gain(.33)

$: label("<~@8 0@17 1@14 2@17 1@14 3@17 ~@13>".pickRestart([
`<its much bet ter [in _ here] [when _ you] [close _ the] [door _ thats] 
[in _ the] [dark _ and] [out _ the] [light _ its] [bet _ ter] [than _ be] fore@2 ~>`,  
`<[things be] [come _ much] [clea _ rer] [when _ the] [cur _ tains] [close _ and] 
 [lights with] [draw _ makes] [things _ much] [clea _ rer] [than _ be] fore@2 ~>`,
`<I can see you [where _ youre] [hi _ ding] [I _ can] [see _ you] ~ ~ 
[~ ~ see] [you _ though] [youre _ not] [real _ ly] there@2 ~>`,
`<will you hear me [when I] [ask you] [why when you] [lock _ the] [door _ and] 
[hide _ the] [key _ you] [seem _ much] [hap _ pi] [er _ than] me@2 ~>`,`~`          
])).s('hh').note(30).end(0)
.pianoroll({ labels: true, fold: false, minMidi: 30, maxMidi: 35, cycles: 4 })

all(x=>x.roomsize(2))
 