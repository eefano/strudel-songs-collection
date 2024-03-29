setDefaultVoicings('legacy')
setcps(130/60)

let tempo = sine.segment(16).slow(9)

stack(cps(tempo.mul(20/60).add(130/60)).gain(0),

"<4 [2@2 1] [0@4 0 1]@2 [2 0 2] [4@2 5] 4 3 3 [1@2 0] [0b@4 -3 0b]@2 [1 0b 1] [3 4 5] 4b 4 >/3"
      .scale("c:minor").transpose(12).note().s("gm_oboe:2").gain(0.7),
      
 n("<<0 -1> [4,5]!2>").chord("<Cm@6 Fm@4 G@4 Cm@2>/3")
      .anchor('g2').mode('root').voicing().piano()
     
  
 //,s("hh")
   ).room(0.6)
  //.clip("1".add(tempo))
        .pianoroll()
