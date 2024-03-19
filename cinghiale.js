// "L'Era Del Cinghiale Bianco" 
// song @by Franco Battiato
// script @by eefano
setDefaultVoicings('legacy')
stack(
  "<0@16 1@14 >".pickRestart(["<[0 1]!2 [0 2] [0 3]>/4","<4!2@7>"]).pickRestart(
   ["<[7 6 5 6 7 5 6 7]!2>".add("<0 1>")
   ,"<[9 8 7 8]*3@1.5 [9 ~!1]@0.5>"
   ,"<9 [~ 7 8 6]>","<9 [~ 7 8 9]>"
   ,"<7@3 6@3 7@5 8 9 7 5@3 6@3 7@5 ~@5>*4"
  ]).n().scale("c4:major").transpose("<[0 -5]@16 [0@7 -5@8]!2@7 >").s("sawtooth").vib(5).vmod(0.1).clip(0.85).attack(0.05).release(0.1).gain(0.6)

,"<0@16 1!2@7 >".pickRestart(["<[Am G C@2]!2 [Em D G@2]!2>/4","<Am@3 G@3 C@5 ~@3 Em@3 D@3 G@5 ~@5>*4"])
  .chord().anchor("C4").voicing().s("triangle").lpf(1200).attack(0.01).gain(0.35)
      
,"<0@16 1@14 >".pickRestart(["[[bd <~!7 bd>] sd],<hh!31 oh>*4",
                       "<bd [sd bd] bd bd [sd bd] bd sd>*2,<hh!17 oh>*4"]).s().bank("YamahaRY30").clip(1).gain(0.4)
).cpm(127/2).room(0.4)
