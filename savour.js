// "Savour" (work in progress)
// @song by Tim Smith
// @script by eefano
setcpm(120 / 2)

const song = "<0@24 0@24 1@21 2@24>"

const ch0rds = song.pickRestart([
  "<Dm A Bb Eb Dm G Dm [Bb Eb] Dm G Dm G>/2",
  "<B@2 D@2 A E C# G# Bb F C# G# Bb G#@4 G#@3 Am>",
  "<D C D C D C Bb [F G#] C# F Dm G>/2"
]);

reed: chord(ch0rds).mode('above')
  .layer(x => x.anchor('c3').voicing().s("gm_bandoneon").hpf(200).lpf(4000).gain(.25).room(.4),
    x => x.anchor(song.pickRestart(["f4", "a4", "e4"])).voicing().struct("x").clip(.8).s("gm_cello").att(.1).gain(.2).rel(.3).hpf(200).room(1))

bass: n(song.pickRestart(["[0@4 0 0]/2", "0", "[0@5 0]/2"])).chord(ch0rds).anchor("e2")
  .clip(.9).mode("root").voicing().transpose("<0@61 [0,12] [-1,11] [-3,9] [-5,7] [0,12] [-1,11] [-3,9] 0@25>")
  .s("gm_electric_bass_finger:2").lpf(300).gain(.8)

guit: n(song.pickRestart(["[~ 0 1 2 1 0]/2", "2*2", "[~ ~ 0 _ 1 _]"]))
  .chord(ch0rds).mode('root').anchor('c4').voicing().s("gm_electric_guitar_clean:2").release(.5).hpf(400).gain(.45)

melo: song.pickRestart([
  `<f4 [[f4@2 e4] d4] c#4 [[c#4@2 d4] e4] f4 [[f4@2 g4] a4] g4 [[g4@2 f4] d#4]
    f4 [[f4@2 e4] d4] b3 [b3@2 f4] f4 [f4@2 f4] d4 g4 f4@2 g3@2 ~@10000  >`,
  "<[f#4*6]@4 [e4:-2@2 e4] [e4@2 f#4] [g#4@2 f4] [d#4@2 c4] [f4@2 f4] [c4@2 ~] [g#4@2 f4] [d#4@2 c4] [f4@2 f4] c4:-2@2 ~@1000>",
  "< ~@8 [d4 e4 f#4]@2 [f#4 g4 a4]@2 d4 a#4 a4 g#4 f4 _ a4:4 _ ~@1000 >"
]).as("note:penv").layer(x => x.s("triangle").vib(5).vibmod(.1).clip(.85).adsr([0.05, .1, .7, .05]).room(.2).hpf(300).lpf(1000).gain(.9),
  x => x.transpose(12).s("saw").gain(.35))

piano: note("<[f6 d6 b5] ~@88 f6 d6 b5 _>").gain("<0@89 .9@4>").s("piano").room(.8)

$: s("rd*3").gain(.3).speed(1.01).hpf(9000).room(.1)

all(x => x.roomsize(10)
  // .ribbon(40,50)
)
