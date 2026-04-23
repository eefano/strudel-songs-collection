// "Death By Elliptical Eye" (work in progress)
// song @by pilotredsun
// script @by eefano
setcpm(122)

$: note(stack("<<a#4 g#4> ~ ~ b3 d#4 ~ ~ b3 <f#4 e4> ~ e4 d#4 a#3 ~ ~ b3>*2",
              "<c#2 c#3 e3 ~ ~ c#3 g#2 ~ c#2 c#3 e3 g#3 a#3 d#3 e3 ~>*2"))
  .s("supersaw").att(0.04).dec(.2).sus(.5).rel(.8).detune(.6)
  .roomsize(0.3).room("<0.5@7 5@5>/16").lpf("<9000@7 5000@5>/16").lpq(2)
  .delay("<0@7 .9@5>/16").dt(.2).dfb(0.01).gain("<.8@7 .55@5>/16")
  .transpose("<0@7 1 0 1 0 1>/16").orbit(1)

$: note("<<a#5 g#5> c#4 e4 b4 d#5 c#4 g#3 b4 <f#5 e5> c#4 e5 d#5 a#4 d#4 e4 b4>*2")
  .s("pulse").dec(.2).sus(.2).pan(.55).gain(.9)
  .mask("<~ x@6 ~@5>/16")

$: note("<c#2@11 e2 f#2@3 e2>*2")
  .s("gm_synth_strings_1").lpf(250).gain(1.5)
  .mask("<~@3 x@4 ~@5>/16")

$: note("<c#2@2 ~ ~ c#2 ~ f#2 ~>")
  .s("gm_synth_strings_1").lpf(250).gain(1.5).rel(.7)
  .mask("<~@7 x@5>/16").transpose("<0@7 1 0 1 0 1>/16")

$: "<bd ~ hh hh*2 sd ~ hh*2 [hh bx] bd ~ hh sd sd ~ hh*2 bd>*2".pickOut({
  bd:s("bd").lpf(4000).velocity(.8), bx:s("bd").lpf(4000).velocity(.4),
  sd:s("sd"), hh:s("hh").hpf(4000).velocity(.8)
}).room(.8).roomsize(2).orbit(2)
  .mask("<~@3 x@4 ~ ~ x@2 ~ >/16")

$: note("<<a#5 g#5> e5 c#5 ~@5 <f#5 e5> ~ e5 d#5 a#4 ~ ~ b4>*2")
  .s("supersaw").dec(.1).sus(.15).pan(.45).gain(.8).delay(.8).dt(.15).dfb(.3)
  .mask("<~@5 x@2 ~@5>/16").roomsize(0.8).room(1).orbit(3)

//all(x=>x.ribbon(7*16,16*2))