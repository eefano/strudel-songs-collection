// "Strudelman will eat you"
// @by eefano
setcps(1)

die: s("cr/16").late(666)
  .bank(rand.range(0,3).pick(["RolandTR707","RolandS50","SequentialCircuitsDrumtracks","Linn9000"]))
  .clip(rand.range(1,3))
  .loop(1).loopBegin(.1)
  .loopEnd(rand.range(.18,.3))
  .speed(rand.range(.06,.10))
  .pan(rand.range(.3,.7))
  .gain(.2).attack(.5).release(3).color('black')

doom: note("a1/8").late(333)
  .s(rand.range(0,40).pick(["numbers:0","numbers:1","numbers:2","numbers:3","numbers:4",
                            "numbers:5","numbers:6","numbers:7","numbers:8","numbers:9","~"]))
  .speed(rand.range(.2,.3))
  .gain(.9).color('black')

pain: s(`<[RolandTR707_cr,RolandS50_cr,SequentialCircuitsDrumtracks_cr,Linn9000_cr,
         numbers:0,numbers:1,numbers:2,numbers:3,numbers:4,
         numbers:5,numbers:6,numbers:7,numbers:8,numbers:9] ~@666>`).gain(0).color('black')

