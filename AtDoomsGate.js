setcpm(115/4)

$: stack(
  // DE LEAD GITAAR
  note(`<
    [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -]
    [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 - e2 - e3 - e2 - e2 - d3 - e2 - e2 - d5 c5 a4 [c5,c5] [e5,e5] [c5,c5] [b4,b4] [e5,e5,e5,e5] [a4,a4] [g#4,g#4] [c5,c5] [e5,e5] [c5,c5] [g#4,g#4] [g#4,g#4] -]
    [[g#4,g#4,e2] e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 - - - -]
    [e2 e2 e3 e2 e2 d3 [e2,e2] e2 c3 e2 [e2,e2] a#2 e2 e2 a#2 b2] [e2 e2 e3 e2 e2 d3 [e2,e2] e2 c3 e2 [e2,e2] a#2 - - - -] [e2 e2 e3 e2 e2 d3 e2 e2 c3 e2 e2 a#2 e2 e2 a#2 b2] [e2 - e2 - e3 - e2 - e2 - d3 - e2 - e2 - e5 [d5,d5] b4 a4 c5 e5 a5 e5 c5 a4 c5 [a5,a#4] e5 d5 c5 -]
    a4>`)
    // De Transpositie: verspringt elke 4 maten
    .add(note("<0 5 0 7>").slow(4)) 
    // De Versnelling: gaat elke 4 maten iets sneller
    .hurry("<1 1.05 1.07 1.09>".slow(4))
    .s("sawtooth")
    .add(note(7))              // Power chords
    .distort(1.5)
    .decay(0.12).sustain(0)
    .gain(range(0.4, 0.6, rand))
    .lpf(sine.range(1000, 2000).slow(8)).lpq(12),

  // DE BAS - Volgt dezelfde transpositie en versnelling
  note(`<
    [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2]
    [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] [c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] [[c2,b1,e2,d2,c2,b1,e2,d2,c2,b1,d2,c2,b1,d2,c#3,c#3,c#3] - - - - - - - - - - - - - - - [e2,e2,e2,e2] - - - [e2,e2,e2,e2] - - - [e2,e2,e2,e2] - [e2,e2,e2,e2] - [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2] -]
    [[e2,e2,e2,e2,c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2,e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2] [e2,e2,e2,e2]]
    [[c2,b1,c2,b1,c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2]] [[c2,b1,c2,b1] [e2,e2,e2,e2] [c2,b1,c2,b1] [e2,e2,e2,e2] - - - -]>`)
    .add(note("<0 5 0 7>").slow(4))
    .hurry("<1 1.05 1.07 1.09>".slow(4))
    .s("triangle")
    .lpf(400)
    .gain(0.7),

  // DRUMS
  stack(
    s("bd:4*2, [~ sd:2], hh27*16").gain(0.7),
    s("bd:4(3,8)").gain(0.4)
  ).hurry("<1 1.05 1.07 1.09>".slow(4))
)
