// "A Balloon For Bertie's Party (coda)"
// song @by Cardiacs
// script @by eefano
setcpm(90*3/4)

$: n("0,~ [1,2]!2")
  .chord("<B Bm B Bm B G E F# E F# E F# G# F# E F# E B D C# F F# G# F# E F# G# F# E F# E >")
 .anchor("<0@17 1@4 2@10>".pickRestart(["<D#3 D3>","<C#3>","<D3 D#3>"]))
  .mode('above').voicing().s("gm_vibraphone").gain(.25).room(.6)

$: note(`<b3 a3 b3 a3 [b3 _ c#4] [d4 _ c#4] [b3 _ g#3] [f#3 _ a#3] [g#3 _ e3] 
         [f#3 _ a#3] [g#3 _ e3] [f#3 _ a#3] [c4 _ g#3] [f#3 _ a#3] g#3@2 ~ 
         [b2 _ c#3] [d3 _ f#3] [f3 _ c#3] [f3 ~ f3] [f#3 _ a#3] [c4 _ g#3] 
         [f#3 _ a#3] [g#3 _ e3] [f#3 _ a#3] [c4 _ g#3] [f#3 _ a#3] g#3@2 ~ >`)
  .s("saw").clip(.6).att(.02).rel(.25).vib(5).vmod(.1).hpf(400).lpf(1600).room(.2).gain(.35)

all(x=>x.roomsize(2)
 // .ribbon(17,4)
  )