
const k = 0.02;

function tablature(te,tB,tG,tD,tA,tE)
  { return stack(tE.add(64).late(k*5),
                 tA.add(59).late(k*4),
                 tD.add(55).late(k*3),
                 tG.add(50).late(k*2),
                 tB.add(45).late(k),
                 te.add(40)); }

const guitar = seq(tablature("0","2","2","1","0","0"),
                   tablature("0","3","2","0","1","0"),
                   "~");

stack(
  guitar.note().s("gm_electric_guitar_jazz").clip(1).release(0.4).gain(0.5),

).slow(5).pianoroll()
