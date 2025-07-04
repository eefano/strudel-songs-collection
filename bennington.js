// "Bennington" (work in progress)
// composed @by John Maus
// script @by eefano
setcps(135 / 60 /4)

bass: "<0@3 1>/8".pickRestart([
  n("<7!3 [4 6] 7*2 7!2 6 9!3 [6 9] 11*2 11!2 10>*4"),
  n("<[9*2 9!2 [6 8]]!2 [11*2 11!2 [7 9]] [11 12# 13 14] >")
]).scale('c1:minor').s('sawtooth').clip(.95).lpf(200).lpe(1).gain(1).room(.2)

gneeow: "<0 ~@3>/8".pickRestart([
  n("<~ [4,7,9]@3 ~@4>*2")
]).scale('c5:minor').s('sawtooth').vib(4.5).vibmod(.4).gain(1).room(.8)

dindin: "<~ 0@2 ~>/8".pickRestart([
  n("[1 2]*4").pan("[.45 .55]*4")
]).scale('c6:minor').s('square').att(0).dec(.5).rel(.3).gain(.15)

pads: "<~@3 0>/8".pickRestart([
  n("<[2,4,6] [-1,2,4]>/2")
]).scale('c4:minor').s('gm_pad_warm').lpf(1500).att(.3).rel(.4).gain(.6).room(.4)

voice: "<~ 0 1 2>/8".pickRestart([
  n("<~@3 [2 2@3]@2 3 4 [5 6@3]@2 7 [8 6] [~ 4@3]@2 ~@9 [4 3@3]@2 4 3 4 5 6 [7 8@3]@2 ~>*4"),
  n("<~@5 4 [4 ~] [3 ~] [4 6@2 4@5]@4 ~@7 [2 2@3]@2 3 4 [5 6@3]@2 ~@4 >*4"),
  n("<~@4 6 7 8 [6 4@3]@2 ~@10 4 [6 7@2 8@2 6@2 4@3]@5 ~@7>*4")
]).scale('c3:minor').s('pulse').clip(.9).room(.5).gain(1)

drums: "<[0,1,2] 2 2 [0,2]>/8".pickRestart([
  "<[~ <~@3 bd ~@4>]>*4",
  "<~ <cp ~> ~@6>*4",
  "<bd sd>*4"
]).pickOut({
  bd:s('bd').lpf(1500).room(.2).gain(.8),
  sd:s('sd').room(.2).gain(.65),
  cp:s('cp').velocity(2).room(1)
})

all(x=>x
 // .ribbon(3*8,1*8)
   )
