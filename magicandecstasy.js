// "Magic And Ecstasy (Exorcist II OST)" (wip)
// song @by Ennio Morricone
// script @by eefano
setcps(145/60)
const song ="<[b,x] [b,o]@2 [b,c]@2 [b,f]@2 [b,o]@2 [b,f]@2 [b,c]@2 [b,o]@2 [b,c]@2>/24"
  
orchestra: song.pickRestart(
{b:`<[a2 [a2 b2] a2 [a2 c3] a2 [a2 d3] [d#3 d3] [c#3 d3] d#3 [d3 c#3] [d3 d#3] [d3 c#3]]!2
     [[a2:.9 b2:.9] [c3:.9 d3@3]@2 d#3 [d#3:.9 d3:.9] [c#3:.9 d3@3]@2 a2
      [a2:.9 b2:.9] [c3:.9 d3@3]@2 d#3 d3 c#3 a2@2 d#3 d3 c#3 d3 c#3@2 c#3@2]@2 >/12`
  .as("note:clip").release(.05)
  .layer(x=>x.s("gm_overdriven_guitar:6").hpf(500).lpf(2500).gain(1.2).pan(.51),
         x=>x.s("gm_electric_bass_finger").transpose(-12).lpf(400).gain(.9).pan(.49))

,o: stack(note(`<[~ c4] [a3 b3] c4 d4 d#4 f4 f#4 f4 g#4 f#4 f4 d#4 
                 [[f4 d#4] a3] b3 c4 d4 d#4 f4 f#4 g#4 c5 c#5 [[d#5 d5] a4] d5 
                 c#5 c5 a4 [[d#4 d4] a3] d5 c#5 c5 a4 d#5 d5 c#5 d5 
                 [[d#5 d5] a4] d5 c#5 d5 c#5 a4 d#4 d4 c#4 [d4 [a3 d4]] d#4 d4>`)
           .layer(x=>x.piano().gain(.7),
                  x=>x.s("gm_dulcimer").gain(.15),
                  x=>x.s("gm_piccolo").gain(.25).transpose(12),
                  x=>x.s("gm_violin").gain(.40)),
          note("<~ ~ [~ a3]!10 ~ [~ a3]!14 ~ [~ a3]!17 ~ [~ a3]!2>").piano().gain(.5),
          note("<a2>/12").fm(2).fmh(2).fmwave("sine").s("supersaw").speed(1.2).attack(.1).release(.1).gain(.25)
        ).transpose(12).color('cyan')

,c: stack(note("<[d#5@2 d5@2 c#5@7 ~]!2 [d#5@2 d5@2 c#5@2 d5 ~ d#5@2 d5@2] [c#5@2 a4@10]>/12")
          .layer(x=>x.s("gm_choir_aahs:1").patt(.1).penv(2).gain(1).pan(.45),
                 x=>x.s("gm_choir_aahs:0").patt(100).penv(.2).gain(.9).pan(.55)).hpf(600)
     ,note("<~@8 a3@4 ~@8 a3@4 ~@16 a3@8>").early(.05).s("gm_gunshot:3").hpf(1000).gain(2)).color('yellow')

,f: note(`<<[[a4 d#5] [d5 c#5] d5 [c#5@6 ~ a4]@2 [c#5@6 ~ a4]@2 [c#5@2 ~ a4] c#5@3 ~]
            [[a4 d#5] [d5 c#5] d5 [c#5@2 d#5@4 ~ a4]@2 [d#5@6 ~ a4]@2 [d#5@2 ~ a4] d#5@3 ~]>
            [[a4 d#5] [d5 c#5] d5 [c#5@2 a4@4 ~ c#5]@2 [a4@6 ~ c#5]@2 [a4@2 ~ c#5] a4@3 ~]>/12`)
    .layer(x=>x.s("gm_flute:0").gain(.7).pan(.6),
           x=>x.s("gm_flute:1").gain(.7).patt(1000).penv(-.5),
           x=>x.s("gm_piccolo").gain(.2).transpose(12).pan(.4)).release(.05).hpf(500).color('magenta')
,x:"~"})
tamb: s("tambourine*2").velocity(.8)
drums: song.pickRestart(
  {b:"~",x:"<0@10 1@2 0@12>",o:"<2@24 3@8 2@8 4@8>",c:"<0@22 1@2 5@12 4@4 4@8>",f:"<0@24 3@4 3@4 0@8 4@8>"})
  .pickRestart(
  ["<cr@24,[~ <~ oh ~ oh ~ oh oh oh ~ oh oh oh>],<~ sd>,<bd ~ [~ bd] ~>>"
  ,"<sd*2 [[sd ht] mt]>"
  ,"<cr@24,<[rd <~ rd>]>,<~ [sd <~ [~ sx]>]>,<[bd <~ bd>] ~>>"
  ,"<cr@4,<[bd sd] [sd ht] [ht mt] [[mt lt] lt]>>"
  ,"<cr@8,<[bd@3 sd] sd*2 [sd@3 ht] ht*2 [ht@3 mt] mt*2 [mt@3 lt] [lt bd]>>"
  ,"<oh!3 cr@3 cr@2>*2,<bd [sd bd] [~ bd] sd>"
  ]).pickOut({
          bd:s('bd').velocity(.65).lpf(800),
          sd:s('sd').velocity(.55).hpf(200),
          sx:s('sd').velocity(.35).hpf(200),
          cr:s('cr').velocity(.12).pan(.55),
          rd:s('rd').velocity(.15).pan(.45),
          oh:s('oh').velocity(.08).pan(.55),
          ht:s('ht').velocity(.4).pan(.4),
          mt:s('mt').velocity(.4).pan(.55),
          lt:s('lt').velocity(.3).pan(.6).hpf(100)})
  .speed(.94).bank('linn9000').gain(.6)

all(x => x.room(.3).postgain(1.6)
    //.ribbon(9*24,1*48)
    )
