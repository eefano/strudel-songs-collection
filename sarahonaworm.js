// "Sarah On A Worm"
// tune @by The Sea Nymphs
// script @by eefano
setcpm(89)
const toscale = register('toscale', (pat) => pat.withValue((v)=>v.endsWith('m')?[v.substring(0,v.length-1),'minor']:[v,'major']));
const randvel = register('randvel', (pat) => pat.velocity(rand.mul(.3).add(.7)))

$: note(`<a6@3 g6 a#6 f#6 a6 f#6 c6 f#6 c6 
          a6@4 g6 a#6 f#6 a6 f#6 c6 f#6 c6@2
          c7 a6 g6 a#6 f#6 a6 f#6 c6 c7@2 
          d7@2 [a#6 g6] [f#6 d6] c6@2 c7@2 [a#6 g6] [f#6 d6] c6@2>/2`)
  .layer
  (x=>x.s("gm_piccolo").randvel().gain("<.5 .55 .6 .55>/92")
  ,x=>x.s("gm_cello").mask("<0 1 1 1>/92").transpose(-12).gain(.8).pan(.42)
  ,x=>x.s("gm_oboe").mask("<0 0 1 0>/92").transpose(-12).randvel().gain(.55).pan(.53)
)
$: `<D@3 D# C D C D Am D Am F 
     D@3 D# C D C D Am D F@2
     D@2 D# C D C D C F@2
     D@2 C D F@2 C@3 D F@2>/2`
  .layer
  (x=>chord(x).anchor("b4").voicing().s("gm_bandoneon").mask("<0 1 1 1>/92").randvel().gain(.25).pan(.53)
  ,x=>chord(x).anchor("b4").voicing().s("gm_string_ensemble_1").mask("<0 0 1 0>/92").att(.1).rel(.1).randvel().gain(.5).pan(.42)
  ,x=>n(irand(7).seg(1).pick(["0","2","2 0","0 2","2 1","~ 2","~ 1"]).sub(7)).scale(x.toscale()).late(.02)
    .s("gm_piano:3").randvel().gain("<.6 .65 .7 .65>/92").lpf(800)
  ,x=>n(irand(3).seg(1).pick(["1,2 1","2,3 2","[1,2] [2,3]"])).chord(x).anchor("g4").voicing().late(.05)
    .s("gm_piano:2").randvel().gain("<.4 .45 .5 .45>/92")
  ,x=>n(irand(6).seg(1).pick(["0","2 1","[0 1] 2","2 0","[2 3] 4","[4 3] 2"]).add(14)).scale(x.toscale())
    .s("gm_piano:1").randvel().gain("<.6 .65 .7 .65>/92")
)
//$: s('hh').note(30).end(0).label(time).pianoroll({ fold: false, labels: true, minMidi: 30, maxMidi: 50, cycles: 20 })
all(x=>x.roomsize(4).room(.9).postgain("<.9@12 .95@12 1@8 1.05@4 1@5 1.05@2 1 .95 .9>/2"))