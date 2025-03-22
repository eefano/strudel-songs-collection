setcpm(120/4)
let key = "<c:major c:minor>/2";
let tra = "0, 3, 5".add("<0 [0 2]>/2");

$: n("<6 3> - [2 <1 0>] <0*2 ->")
.scale(key)
.scaleTranspose(tra)
.s("kawai")
.lpf("<2000 1000 500>/2")
.gain("<0 .3 .7@2>/8")


$: n("<[2 -]*4 [0 -]*6>")
.scale(key)
.s("supersaw")
.scaleTranspose(tra)
.transpose("<0 -5>/8")
.room(.5)
.gain(.5)

$: n("<0 0 0>").scale(key).transpose(-12)
  .penv("<0 12 -12>")
  .patt(.3)
  .s("gm_fretless_bass")
  .gain(1)

$: s("white*16").clip(.5)
.speed("<<1@2 1 2> <2 3>>*16")
.hpa(.05).hpd(.05).hpe(3).hpf("<1000@2 2000 500>*8")
.gain(0.4)

$: s("<<bd bd*2> ~@14 <~@15 bd>>*8")
.speed(1.2).lpf(1000).gain(0.6).room(1)

$: 
s("- - [clap | -] clap*2:<0 4 5 1>").room(.6).gain(.5)
