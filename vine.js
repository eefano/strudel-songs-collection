// "Vine" (work in progress)
// composed @by Tim Smith of Spratleys Japs
// script @by eefano
setCps(143 / 60 / 4)
const song = "<0@8 1@28 2@24 3@24 1@25 1@28 2@36 3@24 4@16 5@12 6@66 7@66 8@66 ~@8>*4"
const chordseq = song.pickRestart(["~",
"<C@3 G# C# Cm G# C# Cm B F# A@3>*2", // verse
"<E B C# G# A# F>*2", // chorus
"<G# C@2>/2", "~", // post-chorus
"<E@4 C@2 A#@3 D@4 C@2 G#@5 D@4>*8", // interlude
"<Dm@9 G@5 A@5 G@4 A@6 Dm@4 G@10 A@5 G@3 A@4 G@5 Dm@13 G@7 A@5 G@7 A@4 G@4 Dm@7 G@9 A@4 G@5 A@3 G@4>*8", //snare      
"<Dm@9 G@5 A@5 G@4 A@6 Dm@4 G@9 A@6 G@3 A@4 G@5 Dm@13 G@7 A@5 G@7 A@4 G@4 Dm@7 G@9 A@4 G@5 A@3 G@4>*8", //handclaps
"<Dm@9 G@6 A@5 G@4 A@6 Dm@4 G@9 A@6 G@3 A@4 G@5 Dm@13 G@7 A@5 G@7 A@4 G@4 Dm@7 G@9 A@4 G@5 A@3 G@3>*8"]); //triangle

voice: song.pickRestart(["~",
  note("<c4*2 c4 [a#3 c4] c4@2 ~ c4*2 d#4 f4 ~ d#4*2!2 d#4 c4 g#4 ~ g4 ~ [f#4 f4] [d#4 c#4] a#3 ~ [e4 d#4] e4 [e4 f#4] g#4@2 g#4>*4"),
  note("<[g#4@2 ~ f#4] [f#4@2 ~ f4] [f4@2 ~ d#4] [d#4@2 ~ d4] [d4@2 ~ c4] [c4 a4@3]>*2").gain(1.4),
  "~"
]).s('gm_oboe').clip(.95).color('yellow')

bass: n(song.pickRestart(["~","0*4","[0@2 ~ 0]*2","0*8"])).chord(chordseq).mode("root:e2").voicing()
  .s("gm_electric_bass_pick").clip(.90).lpf(300).gain(1).color('green')
guitar: n(song.pickRestart(["~","[0,2,3]*2","[[0,2,3]@3 [0,2,3]]*2","~"])).chord(chordseq).mode("root:e3").voicing()
  .s(song.pick(["~","gm_acoustic_guitar_steel:2","gm_overdriven_guitar:2","~"])).color('red')
organ: n(song.pick(["~","~","~","~","[2 1]*4"])).anchor("g5").chord(chordseq).voicing()
  .s("sawtooth").clip(.6).color('cyan')

drums: song.pickRestart([
  "<hh*4,[<bd bd*2> sd]>*2",
  "<hh*4,[bd sd]>*2",
  "<hh*4,[bd sd]>*2",
  "~","<sl*4>","<sl*4>",
  "<hh*4,[<bd bd*2> sd]>*2",
  "<hh*4,[<bd bd*2> [sd,cp]]>*2",
  "<hh*4,tr*2,[<bd bd*2> [sd,cp]]>*2",
]).pickOut({
  bd:s('linndrum_bd').lpf(3000).room(.2).velocity(.8),
  sd:s('linndrum_sd').room(.2).velocity(.65),
  hh:s('linndrum_hh').hpf(7000).speed(1.5).velocity(.3),
  oh:s('linndrum_oh'),
  sl:s('sleighbells'),
  tr:s('anvil').speed(1.15).velocity(30),
  cp:s('cp')
})

all(x=>x.room(.1)
   // .ribbon(2*4,1*8)
  )
