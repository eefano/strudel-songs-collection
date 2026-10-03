// "General Midi Example"

setcpm(120 / 4)

$: note("a b <a c# e c> d").transpose(12)
  .progNum(26).velocity(.8).midichan(1)

$: "<D A G Cm>".struct("x*2").clip(.97).chord().voicing()
  .progNum(21).velocity(.4).midichan(2)

$: note("<d2*4 c#2*4 b1*4 a1*4>")
  .progNum(33).velocity(.8).midichan(3)

$: "<hh!3 oh>*4,cr/4, <bd <sd sd*2>>".pickOut({
  bd: note("c2").velocity(.6),
  sd: note("d2").velocity(.6),
  hh: note("f#2").velocity(.6),
  oh: note("a#2").velocity(.6),
  cr: note("c#3").velocity(.4)
}).midichan(10)

all(x => x.midi('Midi Through:Midi Through Port-0 14:0'))
