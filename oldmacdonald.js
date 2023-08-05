// old mcdonalds 
const chrds = "F [A# F] [F C] [F@3 ~]";
const strct = "[[x ~]!2] [[x ~]!2 x  ~]";
const bstrc = "[[~ x]!2] [[~ x]!2 ~  x]";
const trnsp = "<0 1 2 3 4>";
const beast = "<crow space clash numbers:2 space:1 >"
const p1 = stack(
  "F5*2 [F5 C5] D5*2 C5 A5*2 G5*2 F5@2".legato(0.9).note(),
  //meldy.transpose("-12").note(),
  chord(chrds).anchor("G4").voicing().struct("[~ x]*4 [[~ x]*2 [x@3 ~]]").gain(0.6),
  n("[2 1]*4").chord(chrds).anchor("F2").voicing().struct("[x ~]*8").gain(0.6),
).piano().add(note(trnsp));
const p2 = stack(
  stack(
  "[[F5*2 ~]!2] [[F5 ~]!2 F5*2 ~]".note(),
 chord("F").anchor("G4").voicing().struct(strct).gain(0.6),
  "F2".struct(strct).note().gain(0.6)
    ).legato(0.8).piano().add(note(trnsp)),
 "F".struct(bstrc).s(beast)
);
const p3 = "~@7 [C5 D5]".legato(0.8).note().piano().add(note(trnsp));  
const p0 = "~";

stack(
  cat(p0,p3,p0,p0),
  cat(p1,p1,p2,p1)
  ).cpm(140/8).room(0.4)//.pianoroll()

