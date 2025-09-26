// "Vermin Mangle" (work in progress)
// song @by Tim Smith (Cardiacs)
// script @by eefano
setcps(52 / 60)
const song = `< i@8 j@27 >`
const melody = {
  i: "<f#4 ~ c#5@3 ~ a#4@2 g#4 ~ f#4 ~ a4@2 g#4 ~ f#4 ~ e4 ~ d4@2 ~@2 >*6",
  j: `<f#5@2 [e5@2 c#5] c#5 [f#4 a#4 c#5] [f#5@2 g#5] g#5 a5 [c#5@2 f#5 f#5@2 f#5] f#5 e5
       [c#5 b4 a#4 f#4] f#4 g#4 [c#4@3 a#4 e5@2] [d5 c#5 b4] [b4 a4 g4] f#4!2 g#4 [c#4@2 f#4] f#4@2 ~@100>`,
}
const ch0rds = {
  i: "<F#@2 E7@2>",
  j: "<F#@2 E7@2 F#@2 E D F# D E F# B E F# E G D B E F# D E F#@2 E@2>",
}

$: note(song.pickRestart(melody)).clip(.98)
  .apply(song.pickRestart(
    { i: x=>x.s("gm_trumpet").pan(.3).gain(.6),
      j: x=>x.s("gm_vibraphone:4").vib(10).vibmod(.09).delay(.4).dt(.2).dfb(.10).gain(.7).dec(2)
    }))
     
$: chord(song.pickRestart(ch0rds)).anchor('E4').voicing()
  .layer(x=>x.s("gm_accordion:2").struct("[~ x x]").clip(.6).pan(.40).gain(.4),
         x=>x.transpose(12).s("gm_string_ensemble_2:2").pan(.5).gain(.4))

$: n("[0 ~ ~]").chord(song.pickRestart(ch0rds)).mode('root').anchor('f#2').voicing()
  .s("gm_tuba:3").gain(1)

$: s("bassdrum2:2,tambourine:0").clip(1.5).gain(1.5)

all(x => x.room(.8))
