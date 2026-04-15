// "Savour" (work in progress)
// @song by Tim Smith
// @script by eefano
setcpm(130 / 2)

const song = "<0@24 0@24 1@21 2@24>"
const ch0rds = song.pickRestart([
  "<Dm A Bb Eb Dm G Dm [Bb Eb] Dm G Dm G>/2",
  "<B@2 D@2 A E C# G# Bb F C# G# Bb G#@4 G#@3 Am>",
  "<D C D C D C Bb [F G#] C# F Dm G>/2"
]);

reed: chord(ch0rds).mode('above')
  .layer(x => x.anchor('c3').voicing().s("gm_bandoneon").hpf(200).lpf(4000).gain(.25).room(.25),
    x => x.anchor(song.pickRestart(["f4", "a4", "e4"])).voicing().struct("x").clip(.8)
      .s("gm_cello").att(.15).gain(song.pickRestart([".17",".22",".17"])).rel(.3).hpf(200).room(1.7))

bass: n(song.pickRestart(["[0@4 0 0]/2", "0", "[0@5 0]/2"])).chord(ch0rds).anchor("e2")
  .clip(.9).mode("root").voicing().transpose("<0@61 [0,12] [-1,11] [-3,9] [-5,7] [0,12] [-1,11] [-3,9] 0@25>")
  .s("gm_electric_bass_finger:2").lpf(300).gain(.7)

guit: n(song.pickRestart(["[~ 0 1 2 1 0]/2", "2*2", "[~ ~ 0 _ 1 _]"]))
  .chord(ch0rds).mode('root').anchor('c4').voicing().s("gm_electric_guitar_clean:2").release(.5).hpf(400).gain(.5)

melo: song.pickRestart([
  `<f4 [[f4@2 e4] d4] c#4 [[c#4@2 d4] e4] f4 [[f4@2 g4] a4] g4 [[g4@2 f4] d#4]
    f4 [[f4@2 e4] d4] b3 [b3@2 f4] f4 [f4@2 f4] d4 g4 f4@2 g3@2 ~@10000  >`,
  "<[f#4*6]@4 [e4:-2@2 e4] [e4@2 f#4] [g#4@2 f4] [d#4@2 c4] [f4@2 f4] [c4@2 ~] [g#4@2 f4] [d#4@2 c4] [f4@2 f4] c4:-2@2 ~@1000>",
  "< ~@8 [d4 e4 f#4]@2 [f#4 g4 a4]@2 d4 a#4 a4 g#4 f4 _ a4:4 _ ~@1000 >"
]).as("note:penv").layer(x => x.s("saw").clip(.85).adsr([0.05, .1, .7, .05]).gain(.55),
  x => x.transpose(12).s("saw").gain(.2).att(.4).rel(.4)).vib(10).vibmod(.05).hpf(400).lpf(5000).room(.4)

piano: note("<[f6 d6 b5] ~@88 f6 d6 b5 _>").gain("<0@89 .7@4>").clip(.2).rel(.7).s("gm_vibraphone:3").room(.3)

$: s("rd*3").gain(.25).speed(1.01).hpf(9000).room(.1)

all(x => x.roomsize(6)
//   .ribbon(88,10)
)
