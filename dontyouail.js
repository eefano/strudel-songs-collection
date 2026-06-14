// "Don't you ail, flash the sea to steam" (work in progress)
// song @by Spratleys Japs
// script @by eefano
setcpm(139)
register('pkr',(arg,pat)=>pat.pickRestart(arg))

const song = "<0@24 1@80 2@26 1@80 2@38 3@63 5@40 1@80 2@38 5@40 0@6 ~@24>"
const cho = song.pkr([
  "<G A _>/2",
  "<F# _ B _ A _ E A D A F# B A B G D _ E A _>/2",
  "<D A B A C F D G A _ G A _ G A _ G A _>/2",
  "<F#@4 B@4 A@4 E@2 A@2 C#@2 G@3 C@4 E@3 G@2 C@6 G#@2 C# F# B@3 G@20>",
  "<G A _ G A _ G C F D>/2"
]);

$: song.pkr(["<0@12 1@12>","<2@80>","<2@14 1@36>","<2@24 3 2@2 3 2@8 2@4 2@2 3 2@20>","<1@12 1@8>"])
  .pkr([
  "<[bd,cr] [bd,cr]@2>/2",
  "<cr/2, bd!2 sd sd*2 bd _ sd _ bd!2 sd _ bd!2 sd bd bd _ sd _ bd!2 sd _ >*2",
  "<cr/12,hh*2, <bd bd*2> sd>", 
  "<[hh,bd] sd>*2"
]).s().gain(.4).room(.3)

$: n(song.pkr(["0,1,2,3,4","~","0,1,2,3,4","~","0,1,2,3,4"]).struct(cho))
   .mode('above').chord(cho).anchor("c5").voicing()
  .layer(x=>x.s("gm_pad_bowed:1").gain(.2).hpf(500).lpf(5000).transpose(-12),
         x=>x.s("gm_drawbar_organ").clip(.95).gain(.3).hpf(500))
  .room(1)

$: chord(cho)
  .dict({'':['0 7 12 16']})
  .mode('root').anchor("e3").voicing().struct(song.pkr([cho,"x"]))
   .s("gm_distortion_guitar:4").att(.03).rel(.05).hpf(200).lpf(1600).gain(1).room(.3)
//._pianoroll({fold:false,})

$: n(song.pkr(["0".struct(cho),"0"])).mode('root').chord(cho).anchor('e2').voicing()
   .s("gm_electric_bass_finger:2").gain(.8)
   
$: song.pkr([`~`,
  `<- [c#4 _ _ d#4:.8] d#4:1 _ e4:.8 [e4 _ _ f#4:.8] g#4:.9 e4:.9 f#4:.9 [c#4 c4] c#4:.7 
      [b3 f#3] [e3 a3] [b3 c#4] [b3 _ _ f#4:.8] f#4:.9 _ [b3 _ _ c#4:.8] c#4@2:.9>/2`,
  `<f#4:.9 [f#4 e4] e4:.8 _ d#4 e4:.9 [e4 d#4] c#4:.9 [c4 b3] a3:.9 [a3 g3] f3:.9 [f#3 e3] d3:.9 d3*2 [d3 e3] e3@3 ~@100>`,
  `~`]).as("note:clip")
  .velocity(song.pkr([0,".8","1",0]))
  .layer(x=>x.s("gm_trumpet:2").gain(1.4),
         x=>x.s("gm_trombone:1").gain(.8).transpose(-12))
  .room(.1).delay(.4).dfb(.2).dt(.5)

$: song.pkr(["~","~","~",
    `<- - [c#4 _ _ d#4:.8]@2 d#4 b3 f#4 _ e4 c#4 g#4 _ g#4 f#4 [e4 d#4] c#4 [c#4 d#4] f4
          [d4 c#4] b3 b3 e4 e4 e4 e4 [e4 c#4] b3 g#3 [d4 c#4] b3 e4!6
          g#4 d#4 [f4 d#4] c#4 b4!15 [b4 c#5] d5!7>`,
    `<d5*2 [d5 e5] e5@4 ~@100>`])
  .note().s("gm_overdriven_guitar:3").gain(.9)
  .delay(.4).dt(.6).dfb(.15).vib(4).vibmod(.2).lpf(3000)

all(x=>x.roomsize(3)
//.ribbon(240,80)
)
