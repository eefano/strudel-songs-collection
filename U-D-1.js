// "U-D-1"
// tune @by eefano
setcpm(130*2)

$: "<0@8 1@8 0@4 1@4 2@6 1@2 0@2 0@2 ~@4>/16".pickRestart([`<F A# G# C#>/4`,`<G# B F# C#>/4`,`<B E A# D# C#m G#>/16`]).layer(
  x=>n("<0 -3>").chord(x).anchor('g2').mode('root').voicing()
    .s("gm_electric_bass_finger,tri").lpf(2000).clip(.3).rel(.2).gain(.8).superimpose(x=>x.mask("<x ~ x x ~>/128").s("supersaw")),
  x=>n("<[0,3] [2,3] [1,3,5] [0,2,5]>/2").chord(x).anchor('c4').mode('root').voicing()
    .s("gm_piano:3").clip(.3).rel(.2).hpf(250).gain(.9).jux(late(.001)),
  x=>chord(x).anchor('f4').s("supersaw").voicing().struct("<[~ x] [~ x _ ~]>/2").gain(.37).rel(.2).mask("<x ~ x ~ ~>/128"),
  x=>chord(x).anchor('f5').s("gm_synth_strings_1").voicing().struct("x/8").gain(.45).rel(.2).mask("<~ ~ ~ [x@6 ~ ~] ~>/128")
)

$: n("<0 ~ 0 ~ 0 1 ~ 1 2 ~ 2 ~ 2 3 ~ 3 0 1 0 1 2 3 2 3 4@6 ~@3 0 ~@2 1 ~@3>/16".pickRestart(
  ["<<6 4> [<5 4b> <5b 4>] <6 2> 1>/2",
   "<-1 0 2 _ 6 4 4b _ 7b _ _ 8 4 _ ~@3>",
   "<~ 4 3 4 6b _ ~ 4 3 4 5 _ 4 3 2 _ _>",
   "<~ 6 3 4 _ 5b 4 3 _ ~ ~ 7 9 _ 8 _ >",
   "<5 6b 8 [9b 10] 10b 11b 11b [12b 12] 13@2 14b@2 >/8"
  ])).scale("C#4:major").layer(
  x=>x.s("pulse").hpf('500').clip("<.4 .4 .4 .8 .4>/128").gain(1.15),
  x=>x.mask("<x ~ x x ~>/128").s("sine").vib(5).vibmod(.1).gain(1.1)
  )

$: "<[0,1] 0 [0,1] [0,1,2] [0@7 ~]>/128".pickRestart(
  [s("<<sd sd*2> [bd]>/2").lpf(6000),s("oh").speed(1.05).velocity(.3),s("mt/8").velocity(.2)]) 
  .bank("akailinn").gain(.5)

all(x=>x.dfb(0.0001).delay(.2).dt(0.2).room(.25)
 // .ribbon(128*3,128*2)
    .fast(128*5).rev().slow(128*5)
    .postgain(.9)
   )
