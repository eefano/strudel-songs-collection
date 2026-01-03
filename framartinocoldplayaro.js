// "fra martino coldplayaro"
// script @by eefano
setcpm(120)

$: n(`<0 1 2 0 0 1 2 0 
       2 3 4 _ 2 3 4 _ 
       [4 5] [4 3] 2 0 [4 5] [4 3] 2 0 
       0 -3 0 _ 0 -3 0 _ >`)

  .scale("f5:major")
  .s('gm_recorder')
  .gain(.6)
  .pianoroll({ labels: true, fold: false, minMidi: 55, maxMidi: 95, cycles: 20 })

$: chord("<F C Gm Dm Bbm>/4").voicing().piano().gain(.7)

$: s("<bd [sd <~ bd>]>/2").bank("linn").gain(.5)

$: n("<0 -1 1 -2 3>/4"
  .struct("x")
  .add("<0 7>/2")
)
  .scale("f1:major")
  .s("gm_electric_bass_finger")
