setcps(90/60)

g: n("<[[0,4]]*3>")
  .scale("c#2:minor").s("supersaw").transpose("<0 2 [3 1]>/8")
  .lpa(0).lpe(10).lpd(0.2).lpr(1).lpf("<[10 10 100]>").dist("8:0.18")

s: n("<[[5 ~]*3] 4 4b 3 [1 2 1] 0 [4 5 2] 4 >")
  .scale("c#4:minor").transpose("<0 2 [3 1]>/8")
.s("supersaw").lpf(500).dist("10:0.12").room(0.2)
  .mask("<0@3 1@4 >/8").hush()

d: "[<bd*3 [~ bd bd] [sd ~ bd] [mt lt bd] [[sd,[~ sd@6]] sd mt] >,<oh!4 ~>,<cr>/5]"
  .pickOut({bd:s("EmuDrumulator_bd").velocity(1).lpf(1000),
           sd:s("EmuDrumulator_sd").velocity(1),
           oh:s("EmuDrumulator_oh").pan(0.6).speed(0.7).velocity(0.2),
           mt:s("EmuDrumulator_mt").velocity(0.6),
           lt:s("EmuDrumulator_lt").velocity(0.6),
           cr:s("SequentialCircuitsDrumtracks_cr").speed(1.3).pan(0.4).velocity(0.5)})
  .room(0.9).gain(0.5)
  .mask("<0 1@5 0 1 >/8")

