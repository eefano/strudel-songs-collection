// "Bennington" (work in progress)
// composed @by John Maus
// script @by eefano
setcps(135 / 60 /4)

bass: "<0>/8".pickRestart([
  n("<7!3 [4 6] 7*2 7!2 6 9!3 [6 9] 11*2 11!2 10>*4")
]).scale('c1:minor').s('sawtooth').clip(.95).lpf(150).lpe(1).gain(1).room(.2)

gneeow: "<0 ~ ~>/8".pickRestart([
  n("<~ [4,7,9]@3 ~@4>*2")
]).scale('c5:minor').s('sawtooth').vib(4.5).vibmod(.4).gain(1).room(.8)

dindin: "<~ 0 0>/8".pickRestart([
  n("[1 2]*4").pan("[.45 .55]*4")
]).scale('c6:minor').s('square').att(0).dec(.5).rel(.3).gain(.15)

voice: "<~ 0 1>/8".pickRestart([
  n("<~@3 [2 2@3]@2 3 4 [5 6@3]@2 7 [8 6] [~ 4@3]@2 ~@9 [4 3@3]@2 4 3 4 5 6 [7 8@3]@2 ~>*4"),
  n("<~@5 4 [4 ~] [3 ~] [4 6@2 4@5]@4 ~@7 [2 2@3]@2 3 4 [5 6@3]@2 ~@4 >*4")
]).scale('c3:minor').s('pulse').clip(.9).room(.5).gain(1)

drums: "<[0,1] 2 2>/8".pickRestart([
  "<bd [sd <~ bd ~ ~>]>*4",
  "<~ <cp ~> ~@6>*4",
  "<bd sd>*4"
]).pickOut({
  bd:s('bd').lpf(1500).room(.2).gain(.8),
  sd:s('sd').room(.2).gain(.65),
  cp:s('cp').velocity(2).room(1)
})