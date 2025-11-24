// "Swampy Reggae"
// Jam Session with ldlework

$: s("<~ crow? ~!6>").room(1) 

$: s("[bd <hh ~>]*2").bank("tr909").dec(.4)
$: s("hh*8").degradeBy(0.2)

$: n("0 1 [4 2] [1,3*2]").sound("jazz").room(tri.range(0,1).fast(4))

$: "<<[e3 ~]*4 g2*3> [d3 b2] ~ [a2 [~ a2]] >*2".clip(.9).note().fm(2).gain(.5)
$: n("<0@7 1 2@4>".pick([
  "<<0 ~>,<1 ~>,<~ 2>>*16",
  "<0,1,2>*12",
  "<0,[~ 1@10],[~@2 2@10]>*6"])
).chord("<0@2 1>/4".pick(["<~ <[Am ~]*2 <G C>>>*4","<Em <F Am>>"])).anchor("g4").voicing()
  .s('gm_electric_guitar_muted')

$: n("<0@8 1@4>".pick(["<7 <4 8> 6 4>","<7 6 8 7>"])).scale("a4:minor").s('sine')
    .attack(.3).release(.3).gain(.3).hpf(1000)
  .vib(5).vibmod(.2).trem(10)
