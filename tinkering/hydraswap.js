
await initHydra() 

let bass = note("<C3 Eb3 G2 Bb2>").euclid(3,8).s("sawtooth").lpf(sine.range(400, 1000))
let kick = s("<[bd ~ ~ bd]!3 [bd(5,8,1)]> ")
let hihat = s("hh!6 [hh*2 hh]!2").slow(2)
let final = stack(note("c3@4, c2@4").s("sawtooth").lpf(1000), 
                  s("cr")).delay(.5).delaytime(".75")
let silence = s("bd").hush()

let sequence = "0@4 1@4 2@8 3 4@7".slow(24)

solid(0,0,0)
.add(osc(10, 0.1, 10)  ,H(sequence.pick([1,0,0,1])))
.add(noise()           ,H(sequence.pick([0,1,0,1])))
.add(shape()           ,H(sequence.pick([0,0,1,0])))
.out()
             
sequence.pick([ bass,                   // = 0
                stack(bass, kick),      // = 1
                stack(bass,kick,hihat), // = 2
                final,                  // = 3
                silence])               // = 4 



