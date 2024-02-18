// NOT WORKING UNTIL mixJoin is implemented

const k = 2;

const tablature = (pat) => reify(pat)
  .fmap(([te,tB,tG,tD,tA,tE]) => stack(
      pure(tE+64).late(k*5).color("#FFF0F0"),
      pure(tA+59).late(k*4).color("#FFE0E0"),
      pure(tD+55).late(k*3).color("#FFD000"),
      pure(tG+50).late(k*2).color("#FFD8D8"),
      pure(tB+45).late(k*1).color("#FFD0D0"),
      pure(te+40).late(k*0).color("#FFE8E8"))    
  ).outerJoin()

const guitar = tablature("0:2:2:1:0:0!2 0:3:2:0:1:0 ~");

stack(
  "E3 C3 ~".s("triangle"),
  guitar.note().s("gm_electric_guitar_jazz").clip(1).release(0.4).gain(0.5),

).slow(5).pianoroll()