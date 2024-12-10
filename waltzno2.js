// "Waltz #2" (cps function demo)
// composed @by Dmitri Shostakovich
// script @by eefano
setDefaultVoicings('legacy')

melody: "<~@4 0@16 1@7 2@11.5 ~@3.5>".pickRestart([
  `<4 [2@2 1] [0@4 0 1]@2 [2 0 2] [4@2 5] 4 3 
    3 [1@2 0] [0b@4 -3 0b]@2 [1 0b 1] [3 4 5] 4b 4>`,
    "<[9,7] [[8,6]@2 [7,5]] [[6,4]@2 [5,3]] [3,0] [8,6] [[7,5]@2 [6,4]] [6,4]>", 
  "<[~ [2 ~] [3 ~]] [[4 ~] [4 3] [4 5]] [[3 ~] [3 2] [3 4]] [[2 ~] ~ [4 ~]] > ".sub("<0 0 [0,2]>/4") ])
      .scale("c4:minor").note().s("gm_oboe:2").gain(0.7)._pianoroll({minMidi:10})
   
piano: "<0@28 1@10 0@4>".pickRestart([
     n("<<0 -1> [4,5]!2>*3").chord("<Cm@10 Fm@4 G@4 Cm@4 Fm@2 Bb@2 Eb Ab>"),
     n("<3 <[4,5] > ~>*3").chord("<G Ab Cm Ab>")
          ]).anchor('f2').mode('root').voicing().piano()._pianoroll()

tempochanges: cps(sine.segment(32).slow(16).mul(30).add(160).div(60*3)).gain(0)

all(x=>x
  //.ribbon(24,16)
  .room(0.6))