// BOTH MIDI AND WEBAUDIO EXAMPLE

setcps(120 / 60)

const midipick = {
  rd: note(51),
  bd: note(35),
  sd: note(38),
  cr: note(49)
}
const audiopick = {
  rd: s('rd').velocity(0.1).pan(0.4),
  bd: s('bd').velocity(0.5),
  sd: s('sd').velocity(0.5),
  cr: s('cr').velocity(0.1).pan(0.6)
}

$: "cr/4,rd*2,<bd sd>".layer(
  x => x.pickOut(midipick).midichan(10).midi(),
  x => x.pickOut(audiopick).bank("Linn9000").gain(0.7)
)