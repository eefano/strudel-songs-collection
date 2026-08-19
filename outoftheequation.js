// "Out of the equation" (work in distress)
// @by eefano
setcpm(160)

samples('shabda/speech:we,are_taking_ourselves,out_of_the_equation')

$: s("<we ~@3 are_taking_ourselves ~@7 out_of_the_equation ~@3>")
  .mask("x/16".degradeBy(.9)).dist("8:.1").gain(.1).room(.5).jux(x => x.late(0.05))

$: note("g1*4").transpose("<0@7 3>")
  .sometimesBy(.1, x => x.transpose(12))
  .s('supersaw').clip(.5).lpf("2000".add(sine.seg(8).mul(2000))).gain(1)

$: note("g1,d2,g2,d3").s("gm_distortion_guitar").n(irand(15).pick(["3", "0"]))
  .struct("[x _ _ x _ _ x _]/4").hpf(600).room(.6).gain(.9).pan(.55)
  .superimpose(x => x.late(0.3).gain(.45).pan(.2)).mask(irand(6).seg(1).slow(32))

$: s("siren:3/14").degradeBy(.85).speed(.5).gain(6).room(2)
$: s("gm_gunshot:0").note("c1").struct("x".degradeBy(.97)).room(3).gain(1)
$: s("gm_gunshot:2").note("g4").struct("~ x*4".degradeBy(.96)).room(2).pan(.3).gain(.5)
$: s("gm_gunshot:3").note("c5").struct("x*4 ~".degradeBy(.95)).room(2).pan(.7).gain(.5)

$: s("bd,bd:1").lpf(3500).lpa(1).lps(1).room(.1).gain(.85)
$: s("<~ oh:6>*2,hh:2*4").lpf(5000).lpa(1).lps(1).room(.3).gain(.8).mask(irand(5).seg(1).slow(32))
