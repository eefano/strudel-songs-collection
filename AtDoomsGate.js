setcpm(115/4)

$: stack(
  // lead guitar
  note(`<
    [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -]
    [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 - e2 - e3 - e2 - e2 - d3 - e2 - e2 - d5 c5 a4 [c5,c5] [e5,e5] [c5,c5] [b4,b4] [e5,e5,e5,e5] [a4,a4] [g#4,g#4] [c5,c5] [e5,e5] [c5,c5] [g#4,g#4] [g#4,g#4] -]
    [[g#4,g#4,e2] e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -]
    [e2 e2 e3 e2 e2 d3 [e2,e2] e2 c3 e2 [e2,e2] a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 [e2,e2] e2 c3 e2 [e2,e2] a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 - e2 - e3 - e2 - e2 - d3 - e2 - e2 - e5 [d5,d5] b4 a4 c5 e5 a5 e5 c5 a4 c5 [a5,a#4] e5 d5 c5 -]
    a4>`)
    .s("sawtooth")
    .add(note(7))              
    .distort(1.6)              
    .decay(0.12).sustain(0)    
    .gain(range(0.5, 0.7, rand))
    .delay(rand.mul(0.005))    
    .lpf(sine.range(900, 1600).slow(4)).lpq(15) 
    .pan(range(-0.5, 0.5, sine.slow(8))), 

  // bass
  note(`<
    [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2]
    [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] [[c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] - - - - - - - - - - - - - - - [e2,e2,e2,e2] - - - [e2,e2,e2,e2] - - - [e2,e2,e2,e2] - [e2,e2,e2,e2] - [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2] -]
    [[e2,e2,e2,e2,c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2,e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2]]
    [[c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] - - - -]>`)
    .s("triangle")
    .lpf(400)
    .gain(0.8),

  // drums
  stack(
    s("bd:4*2, [~ sd:2], hh27*16").gain(0.7),
    s("bd:4(3,8)").gain(0.4) // Ghost notes
  )
)
