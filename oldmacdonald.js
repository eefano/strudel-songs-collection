// old mcdonalds has bad samples
const beast = ["crow","space","gm_bird_tweet","space:4","clash","space:1"]
const bsequ = "<~@2 0 ~@3 1 0 ~@3 2 1 0 ~@3 3 2 1 0 ~@3 4 3 2 1 0 ~@2>".pick(beast)
const chrds = "F [A# F] [F C] [F@3 ~]";
const strct = "[[x ~]!2] [[x ~]!2 x  ~]";
const bstrc = "[[~ x]!2] [[~ x]!2 ~  x]";
const trnsp = "<0!4 1!5 2!6 3!7 4!8 ~>";

"<[0,3] [0,1] 2 0!2 [0,1] [2,1] 2 0!2 [0,1] [2,1]!2 2 0!2 [0,1] [2,1]!3 2 0!2 [0,1] [2,1]!4 2 [0@7 ~] ~>".pick(
[stack(
  "F5*2 [F5 C5] D5*2 C5 A5*2 G5*2 F5@2".legato(0.9).note(),
  chord(chrds).anchor("G4").voicing().struct("[~ x]*4 [[~ x]*2 [x@3 ~]]").gain(0.6),
  n("[2 1]*4").chord(chrds).anchor("F2").voicing().struct("[x ~]*8").gain(0.6),
 ).piano().add(note(trnsp))
,"~@7 [C5 D5]".legato(0.8).note().piano().add(note(trnsp)) 
,stack(
  stack(
  "[[F5*2 ~]!2] [[F5 ~]!2 F5*2 ~]".note(),
 chord("F").anchor("G4").voicing().struct(strct).gain(0.6),
  "F2".struct(strct).note().gain(0.6)
    ).legato(0.8).piano().add(note(trnsp)),
 "F".struct(bstrc).s(bsequ).release(0))
 
,"0,1,2,3,4,5".pick(beast).gain(0) // samples preload trick
]).cpm(140/8).room(0.4)
