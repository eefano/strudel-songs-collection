// "Tree Tops High" 
// song @by The Sea Nymphs
// script @by eefano
setcpm(62)
all(x=>x.roomsize(4).room(.8))
const song = "<0@26 1@11 0@26 1@10 2@13 0@26 1@10 2@11 2@11 2@13 ~@8>"

$: song.pickRestart([`<C _ F A _ C A <[C Em A C Em A] [E F A G A G]>@6>`,
      `<B A B F E G# E G# _ _ ~>`,`<Asus B F A C# E Am D Am D _ _ ~>`]).chord().layer(
  x=>x.anchor('g5').voicing().s("gm_pad_sweep").gain(song.pick([.65,.6,.6])).pan(.52),
  x=>x.anchor('g4').voicing().s("gm_piano:2").gain(.5).pan(.48).hpf(100).mask("<~@26 x@139>"),
  x=>x.n("0").anchor('c2').mode('root').voicing()
    .s("gm_acoustic_bass:1").clip(.7).rel(.1).lpf(100).gain(.5).mask("<~@26 x@139>"))

$: song.pickRestart(["~",
  `<d#5 [c#5 b4 _] a4 [b4 c#5 _] d#5 [c#5 b4 _] c5 [b4 a4 _] g#4@12 ~ ~ >*2`, `<e5 [d#5 _ f#4] 
  [f4@3 g4 a4 _] [a4@3 b4 c#5 _] [g#4@3 g4 g#4 _]!2 [c5@3 d5 e5 _] f#5 [c5@3 d5 e5 _] f#5@3 ~>`
  ]).note().s("gm_oboe:4,gm_drawbar_organ").gain(.75)
$: song.pickRestart([
  `<e4 e4 [f4 _ f4] e4 c#4 g3 e4 <[g3 _ e3 _ _ ~] [g#3 a3 e4 _ _ ~]>@6>`,"~","~"
  ]).note().att(.03).rel(.2).s("gm_choir_aahs")
  .layer(x=>x.transpose(-12).pan(.4).gain(1.1),x=>x.gain(1.3),x=>x.transpose(12).pan(.6).gain(1.3))

$: label("<0@26 ~@11 1@26 ~@23 2@26 ~@53>".pickRestart([
`<She lived [to _ be] three hun- dre- ed or _ more _ _ ~
  All [the _ worlds] [tur- _ ning] in her mi- ind In her mind _ _ ~>`,
`<She lived [in _ the] tree tops hi- igh hi- _ igh _ _ ~
  A wild [wind _ whipped] her a- way in- to the sky _ _ ~>`,
`<[We _ will] throw [a _ sur-] pri- ise pa- a- a- _ rty _ _ ~
  But [she _ will] [ne- _ ver] show The wi- ind blowed her high _ _ ~>`
])).s('hh').note("<30@42 33@8 30@6 34 35 36 37@4 30@45 37@4 ~@53>").end(0)
.pianoroll({ labels: true, fold: false, minMidi: 30, maxMidi: 38, cycles: 4 })
