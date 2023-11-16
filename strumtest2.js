const k = 0.01;

stack(
  n(stack("~ -1","~@0.5 0@1.5","1 1".late(k),"~ 2".late(k*2),"~ 3".late(k*3)))
     .chord("G!2 Bm E ".slow(4)).anchor("G4!2 F#4 E4".slow(4)).voicing()
     .s("gm_electric_guitar_jazz").clip(1).release(0.4).gain(0.5),

).slow(2).pianoroll()