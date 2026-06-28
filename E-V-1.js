// "E-V-1"
// tune @by eefano
setcpm(130*2)

$: "<0@8 1@8 0@4 1@4 2@6 1@2 0@2 0@2 ~@4>/16".pickRestart([`<Fm G G# C#>/4`,`<A Bm F# C#>/4`,`<Eb Em D# Dm C#m G#>/16`]).layer(
  x=>n("<0 -3>/2".restart("x/7").restart("x/128")).late(.1).lpf(2000).chord(x).anchor('f3').mode('root').voicing()
    .s("tri").clip(.3).rel(.2).superimpose(x=>x.mask("<~ ~ x x ~>/128").s("supersaw")),
  x=>n("<[0,3] [2,3] [1,3,5] [0,2,5]>/2").chord(x).anchor('c4').mode('root').voicing()
    .s("tri").clip(.3).rel(.2).hpf(250).gain(.6),
  x=>chord(x).anchor('f4').s("supersaw").voicing().struct("<[~ x] [~ x _ ~]>/2").gain(.3).rel(.2).mask("<~ ~ x ~ ~>/128"),
  x=>chord(x).anchor('f5').s("gm_synth_strings_1").voicing().struct("x/8").gain(.5).rel(.2).mask("<~ ~ ~ [x@6 ~ ~] ~>/128")
)

$: n("<~@2 0 ~ 0 1 ~ 1 ~@2 2 ~ 2 3 ~ 3 0 1 0 1 2 3 2 3 4@6 ~@3 0 ~@2 1 ~@3>/16".pickRestart(
  ["<4 [4b 4] <6b 2> 1>/2",
   "<-1 0 2 _ 6b 3b 4b _ 7b _ _ 8 4 _ ~@3>",
   "<~ 4 3 4 6b _ ~ 4 3 4 5 _ 4 3 2 _ _>",
   "<~ 7 3 4 _ 5b 4 3 _ ~ ~ 7 9 _ 8 _ >",
   "<5 6b 8 [9b 10] 11b@2 11b [12b 12] 13@2 14b@2 >/8"
  ])).scale("C#4:major").layer(
  x=>x.s("pulse").hpf('500').clip("<.3 .3 .3 .8 .3>/128"),
  x=>x.mask("<~ ~ x x ~>/128").s("sine").vib(2).vibmod(.2).gain(1.2)
  )

$: s("<bd oh>/2,hh").restart("x/7").restart("x/128").n("<0@2 [0,1] [1,2] [0@7 ~]>/128").bank("tr808").gain(.45).lpf(6000)

all(x=>x.dfb(0.0001).delay(.3).dt(0.2).room(.25)
 //.ribbon(128*3,128*2)
    .postgain(.85)
   )
