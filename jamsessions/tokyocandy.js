// "Tokyo Candy"
// nudel jam session

setcps(115 / 60 / 4)

let scale = "<f:major!4 g:major!4>/2"

$: "<<-3 [1 0] 2 [1 4]> <2 4 0 2>>"
  .add("<0,7>/4")
  //.add("-5")
  .n().scale(scale)
  .adsr(".2:0.5:0.4:1")
  .s("saw")
  .lpf(1600)
  .gain(0.6)

$: n("< [0@3 7]@2 ~@2 4 3 2 [1 2@3]@2 0 ~ ~ >*8".add(-7))
  .scale(scale).s("gm_electric_bass_finger").clip(.7).lpf("600")

$: "<0 2>".add("[0,2,4]").add("<0 1 2 1>")
  .struct("<~ [<x*4 x*4 x*6>]@6 x>*8")
  .n().scale(scale).s("gm_piano:4").clip(.6)
  .gain(.3).attack(0).release(.3)

$: s("tr909_bd").struct("<x [~ x ~ ~] x ~>*4").gain(.7)
$: s("<~ [tr909_sd < ~@3 tr909_sd*2>]>*4").gain(.7).room(.3)
$: s("<~ tr909_oh>*8").gain(.15).hpf(3000)
$: s("<tr909_cr>/8").gain(.15).hpf(3000)

$: n("[- [4 2] [3 1] [2 0]]*2").scale(scale).transpose(12)
  .s("square")
  .jux(transpose(12))
  .decay(sine.slow(5).range(0.05, 0.1))
  .lpf(sine.slow(7).range(1000, 3000))
  .room(0.6)
  .gain(.4)

