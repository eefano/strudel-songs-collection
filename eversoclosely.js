
const epic = "D Dm Am D Gm C F Am A#";

const theme = "0 3 5 7@2 11@2 9@2 [10@2 7]@2 5 7@2 6@2 9@3 7 5 4@2 2@2 3@2"
       .scale("a:major a:minor@2 a:major a:minor@5").note()

stack(
n("0,1,2,3,4,5,6,7").chord(epic).struct("x*9").anchor("C4").voicing().s("gm_reed_organ").gain(0.3)
,theme.s("gm_oboe").gain(1.1)
,
stack(
  s("<rd*3>*9").gain(0.1),
  s("[[bd ~ bd] [~ ~ bd]]!3@2 [bd ~ bd] [~ bd bd]!2").gain(0.5),
  s("[~ sd]!3@2 ~ sd!2").gain(0.5),
  s("cr").gain(0.2)
).bank("Linn9000")

).slow(9).cpm(90*6/8).room(0.8)
 