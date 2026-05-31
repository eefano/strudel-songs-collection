setDefaultVoicings('legacy')

const k = 0.01;

stack(
  n(stack("0@2 0 3@2 3 0 3",
          "1@2 1 2@2 2 1 2".late(k),
          "2@2 2 1@2 1 2 1".late(k*2),
          "3@2 3 0@2 0 3 0".late(k*3)))
     .chord("G!2 Bm E ".slow(4)).anchor("G4!2 F#4 A4".slow(4)).voicing()
     .s("gm_electric_guitar_jazz").clip(1).release(0.2).gain(0.5),

).cpm(140/4).pianoroll()
