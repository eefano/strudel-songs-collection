// "Piazza Degli Affari"
// song @by Stormy Six
// script @by eefano
// total length: 26 + 231 x 3 + 88 = 807
setcpm(104*2)
const nk = x=>n(x).scale(['E3','minor'])

const line = "<~ ~ 2 2 1 _ 3 3 2 _ 4 4 3 6 _ 3 4 8 7 4 _ 3 4 2 6 _ 0 4 _ 0 2 3 4 8 7 4 9 8 7 0 2 _ 3 4 1@4>*2"
const chrs = "<7*2 6@6 7*2 6@4 7*2 6@6 7*2 6@4 6*2 5@6 6*2 5@4 6*2 5@6 5@4 6@4 7@12>"
const melo = "<~ 0 4 3 8 7 <[9 8 7 _ 4 _] [10 9 8 _ 9 _]>@6 >/2"
const mel1 = "<~ ~ 9*2 8 10*2 9 7 ~ ~ 9*2 8 10>"
const mel2 = "<9@3 8 7 6 5 4 3@4 4@12 ~@100>*2"

const sthp = `<0@80 ~@18 ~@96     ~@51 ~@12
                    2@72 2@96     1@51 ~@12
                    2@6 [0,2]@80 2@82 1@63 0@80 ~@8>`
synth: sthp.pickRestart({
  0: stack(nk("<~ ~ ~ 14 13 17 _ 15>/2").clip("<.98@7 3.5>/2"),
           nk("<7@14 ~@2>").penv(12).patt(.8))
    .hpf(500).gain(sthp.pickRestart(["<.4 .35 .25 .2 .1>/16"])).pan(sthp.pickRestart(["<.4 .6>/16"])),
  1: nk(chrs).transpose("[-12,-5]").lpf(3000).gain(.4),
  2: nk("-14*2").clip(.4).lpf(400).gain(.8)
}).s("sawtooth").release(.05)

clean: `<~@26 0@72 0@96 ~@51 0*4@12
              0@72 0@96 ~@51 0*4@12
              0@72 ~@96 ~@51 0*4@12 0*4@12 ~@68 ~@8>`.pickRestart({
  0:nk(line)
  }).s("gm_electric_guitar_clean").hpf(1000).v(5).vmod(.2).gain(.95).color('yellow')

disto: `<~@26 2@72 2@96 0@43 1@8 2@12
              2@72 2@96 0@43 1@8 2@12
              2@72 2@96 3@51 4@24 ~@68  ~@8>`.pickRestart({
  0:nk(chrs).clip(.5).release("<.5 6@6 .5 4@4>".mul(.38)).velocity(.8).transpose("[-12,-17]").lpf(4000),
  1:nk("<5@4 6@4>").velocity(.7).transpose("[-12,-17]").lpf(4000),
  2:nk("<7@24>").clip(.2).release(8).velocity(.6).transpose("[-24,-17]").lpf(3000),
  3:nk(`< ~ ~ 7 _ 6 _ 10 _  [8 9]*6@4 11@7 7 _ 6 _ 10 _ 8@4 7@3 
          [10 9 11 10 13 11 16 13 16 13 16 13]@11 
          [11 12] [11 10] 11 9 [8 9] [8 7] 8 6>`).delay(.4).dt(.6).dfb(.15).vib(4).vibmod(.2).lpf(3000),
  4:nk("<7 ~ ~>/8").release(5).vib(8).vibmod(.2)
  }).s("gm_overdriven_guitar:3").gain(.9).color('red')

bassg: `<~@26 0@72 0@96 1@43 2@20
              0@72 0@96 1@43 2@20
              3@72 0@96 1@43 2@20 ~@80 ~@8>`.pickRestart({
  0:nk("<0@2 ~ 0@2 ~ 0@7 ~ 7 7>*2"),
  1:nk(chrs.struct("<x*2 x@2 x*2 ~ x*2 ~ x*2 x@2 x*2 ~>")),
  2:nk("<5@4 6@4 0*4@12>"), 
  3:nk("<0 0 14b 14 0 0 7b 7 0 _ 0 [14b,15]@2 [14,16]@2 0>*2")
  }).transpose(-24).s("gm_electric_bass_pick").clip(.85).hpf(50).lpf(2000).gain(1.1).color('blue')

voice: `<~@26 ~@72 [0,1]@96 [2,3]@43 [4,5]@20
              ~@72 [0,1]@96 [2,3]@43 [4,5]@20 
              ~@72 [0,6]@96 ~@43 ~@20 ~@80 ~@8>`.pickRestart({
  0:nk(melo).pan(".45").velocity(.8), 1:nk(melo.sub(7)).pan(".55").velocity(.8),
  2:nk(mel1).pan(".45").clip(.95), 3:nk(mel1.sub(5)).pan(".55").clip(.95),
  4:nk(mel2).pan(".45").clip(.95), 5:nk(mel2.sub(7)).pan(".55").clip(.95).velocity(.8),
  6:nk(line).pan(".55").clip(.8),
  }).s("square").delay(.2).dt(.6).dfb(.15).hpf(200).lpf(4000).gain(.85).color('cyan')

drums: `<5@26 [0,3,6]@72 [0,3,7]@96 1@43 [2,3]*2@8 [3,4]@12
              [0,3,6]@72 [0,3,7]@96 1@43 [2,3]*2@8 [3,4]@12 
              [0,3,6]@72 [0,3,7]@96 1@43 [2,3]*3@12 ~@8 ~@80 ~@8>`.pickRestart({
  0: stack(
    s("hh*2").speed("1*2".add(rand2.range(-.15,.15))).clip(.5).velocity(.25).hpf(5000),
    s("sd:1").struct("<x [~ x] <x x*2> [~ x] x x x <~ [~ x]>>").speed(1.1).hpf(400),
    s("<bd sd [~ bd] sd>/2")),
  1: s("<mt*2 [mt,bd,lt] ~ bd ~ bd ~ mt*2 [mt,bd,lt] ~ bd ~>"),
  2: s("<bd@4>"), 3: s("<cr@4 ~@100>").speed(1.1).velocity(.3),
  4: stack(
    s("sd:1").struct("<x ~ x x x x>*2").speed(1.1).velocity(.6).hpf(400),
    s("<bd ~ [~ bd]>, <~@10 mt*2 mt*2>")),
  5:s("<~ ~ mt@4 mt@6 mt [~ mt] lt lt ~ ~ mt lt ~ ~ ht*8@4>"),
  6:s("<~@34 mt*4 lt*4>/2"), 7:s("<~@46 ht mt>/2")
  }).bank("linndrum").gain(.4)

all(x=>x.room(.4)
 //.ribbon(26 + 72 + 96, 43 + 20)
)