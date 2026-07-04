// "Gipsy Woman" (work in progress)
// song @by Crystal Waters
// script @by eefano
setcpm(120)

$: n(`<[[-3,3,4,6,8]@2 [-2,4,5,7,9]@3] 
      <[[-4,3,5,7,9]@2 [-1,3,5,7b,8]@3] [[1,8,10,13b,14]@2 [1b,8b,10,12,14]@3]>
       [0,2,4,6,[8@2 7@3]]!2 >/4`)
  .struct("<x x*4@3>").scale("d4:minor").clip(.87).s("gm_percussive_organ:1").hpf(200).lpf(2000).gain(.6)

$: n(`<~ 9 8 8 9 8 9 8 9 8 ~ ~ 9 8 7 6 7 _ 6 ~@3 9 9 7 _ 6 ~@5>*2`)
  .scale("d3:minor").s("gm_alto_sax").gain(1.1).delay(.2).dt(1).dfb(.00001)


$: "bd,<hh*2 oh>*2,<~ cp>"
  .pickOut({
    bd: s("bd").velocity(1),
    cp: s("cp").velocity(1),
    hh: s("hh").velocity(.3),
    oh: s("oh").velocity(.3)
  }).bank("RolandTR909").mask("<~ x>/32").gain(.6)


//$: s('hh').note(30).end(0).label(time).pianoroll({ fold: false, labels: true, minMidi: 30, maxMidi: 50, cycles: 20 })
all(x => x.roomsize(1).room(.5))
